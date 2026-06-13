# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) and other coding
agents when working with this repository.

## What this repository is

`@sentio/api` — the TypeScript client for the [Sentio](https://sentio.xyz)
public API, published to npm. The bindings are generated from Sentio's
protobuf definitions with [protobuf-es](https://github.com/bufbuild/protobuf-es)
and call the REST API through [connect-es](https://github.com/connectrpc/connect-es)
using the [@sentio/connect-gateway-es](https://github.com/sentioxyz/connect-gateway-es)
transport (the grpc-gateway REST dialect, routed by the `google.api.http`
option bytes embedded in the generated descriptors).

## Generated vs hand-written

| Path | Owner |
|---|---|
| `src/gen/**` | **CI-owned — never hand-edit.** Synced by Sentio's internal CI from the proto sources, generated with visibility-filtered codegen (public REST surface only: methods need a `google.api.http` binding and public visibility; everything else, including unreachable types, is pruned at the descriptor level). Local edits will be overwritten by the next sync. |
| `openapi.json`, `doc/` | CI-owned — the OpenAPI spec and HTML reference for the same surface. |
| `src/client.ts`, `src/index.ts`, `test/`, configs | Hand-written; edit here. |

API surface changes (new endpoints, fields, visibility) happen upstream in
Sentio's proto definitions, not in this repository.

## Commands

```bash
pnpm install        # also builds via the prepare script
pnpm build          # tsc -> dist/
pnpm test           # node:test via tsx; offline tests always run,
                    # the live test runs only when SENTIO_API_KEY is set
```

The package is ESM-only and requires Node 24+. pnpm 11 needs the build-script
approval in `pnpm-workspace.yaml` (`allowBuilds: esbuild`).

## Architecture notes

- `createSentioTransport({ apiKey, baseUrl, ... })` builds a connect Transport
  speaking the gateway REST dialect; `apiKey` is sent as the `api-key` header.
  `createSentioClient(Service, options)` is the one-service shortcut; for
  several services create one transport and use connect's `createClient`.
- Default `baseUrl` is `https://app.sentio.xyz`, which serves the annotation
  paths (`/api/v1/...`) verbatim. `https://api.sentio.xyz` serves the same API
  under `/v1/...` (the prefix-stripped form used in the REST docs and
  `openapi.json`) and will NOT route the annotation paths — don't point the
  transport at it.
- protobuf-es conventions apply: request messages are partial init shapes
  (omitted fields take proto defaults), `oneof` fields are `{ case, value }`
  discriminated unions, errors are connect-es `ConnectError`s carrying the
  server's `google.rpc.Status` details.
- `src/index.ts` re-exports the service descriptors only. Do NOT add blanket
  `export *` of generated modules — request/response type names repeat across
  services and would collide. Message types are deep-imported by consumers via
  the `@sentio/api/gen/*` subpath.

## Releases

semantic-release with conventional commits (angular preset + custom rules in
`release.config.mjs`): pushes to `main` publish `rc` prereleases, the
`release` branch publishes stable versions; `chore:` commits release a patch,
`BREAKING CHANGE`/`!` a major. CI syncs to `src/gen` land as `chore: update`
commits from the Sentio bot.
