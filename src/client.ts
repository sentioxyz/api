import type { DescService } from '@bufbuild/protobuf'
import { type Client, createClient, type Transport } from '@connectrpc/connect'
import { createGatewayTransport, type GatewayTransportOptions } from '@sentio/connect-gateway-es'

/**
 * Default API origin. `api.sentio.xyz` serves the API under the prefix-stripped
 * `/v1/...` paths (the same surface documented in `openapi.json` and the REST
 * reference). The legacy `https://app.sentio.xyz/api/v1/...` origin is being
 * deprecated; see {@link createSentioTransport} for the path rewrite that lets
 * the generated `/api/v1/...` bindings reach this host.
 */
export const DEFAULT_BASE_URL = 'https://api.sentio.xyz'

export interface SentioApiOptions extends Omit<GatewayTransportOptions, 'baseUrl'> {
  /**
   * Sentio API key, sent as the `api-key` header. Create one under
   * your project's settings. Optional for the few public endpoints.
   */
  apiKey?: string
  /** API origin; defaults to {@link DEFAULT_BASE_URL}. */
  baseUrl?: string
}

/**
 * Drops the gateway's historical `/api` path prefix from an outgoing request.
 * The CI-generated descriptors carry the `/api/v1/...` annotation paths that the
 * legacy `app.sentio.xyz` host served verbatim, but `api.sentio.xyz` exposes the
 * same RPCs under `/v1/...`. Every binding in the public surface is `/api/v1/*`,
 * so removing a leading `/api` segment yields the path the current host routes.
 */
function stripGatewayPathPrefix(
  input: Parameters<typeof globalThis.fetch>[0],
): Parameters<typeof globalThis.fetch>[0] {
  if (typeof input !== 'string') return input
  try {
    const url = new URL(input)
    if (url.pathname.startsWith('/api/v1/')) {
      url.pathname = url.pathname.slice('/api'.length)
      return url.toString()
    }
    return input
  } catch {
    // Relative URL (baseUrl: '', e.g. behind a same-origin proxy).
    return input.startsWith('/api/v1/') ? input.slice('/api'.length) : input
  }
}

/**
 * Creates a Connect transport that speaks Sentio's REST (grpc-gateway)
 * dialect. Share one transport across clients of multiple services.
 */
export function createSentioTransport(options: SentioApiOptions = {}): Transport {
  const { apiKey, baseUrl, headers, fetch: customFetch, ...rest } = options
  const h = new Headers(headers)
  if (apiKey !== undefined && !h.has('api-key')) {
    h.set('api-key', apiKey)
  }
  const baseFetch = customFetch ?? globalThis.fetch
  return createGatewayTransport({
    baseUrl: baseUrl ?? DEFAULT_BASE_URL,
    headers: h,
    fetch: (input, init) => baseFetch(stripGatewayPathPrefix(input), init),
    ...rest,
  })
}

/**
 * Creates a typed client for one Sentio service:
 *
 * ```ts
 * const web = createSentioClient(WebService, { apiKey })
 * const projects = await web.getProjectList({})
 * ```
 *
 * To talk to several services, create one transport and pass it to
 * connect's `createClient` per service instead.
 */
export function createSentioClient<T extends DescService>(
  service: T,
  options: SentioApiOptions = {},
): Client<T> {
  return createClient(service, createSentioTransport(options))
}

export { createClient }
export type { Client, Transport }
