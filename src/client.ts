import type { DescService } from '@bufbuild/protobuf'
import { type Client, createClient, type Transport } from '@connectrpc/connect'
import { createGatewayTransport, type GatewayTransportOptions } from '@sentio/connect-gateway-es'

/**
 * Default API origin. The generated bindings carry the gateway's `/api/v1/...`
 * paths, which this host serves directly (the same dialect the Sentio web app
 * and the sentio-sdk CLI use).
 */
export const DEFAULT_BASE_URL = 'https://app.sentio.xyz'

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
 * Creates a Connect transport that speaks Sentio's REST (grpc-gateway)
 * dialect. Share one transport across clients of multiple services.
 */
export function createSentioTransport(options: SentioApiOptions = {}): Transport {
  const { apiKey, baseUrl, headers, ...rest } = options
  const h = new Headers(headers)
  if (apiKey !== undefined && !h.has('api-key')) {
    h.set('api-key', apiKey)
  }
  return createGatewayTransport({
    baseUrl: baseUrl ?? DEFAULT_BASE_URL,
    headers: h,
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
