# Sentio API

[![npm version](https://img.shields.io/npm/v/@sentio/api.svg)](https://www.npmjs.com/package/@sentio/api) [![Release](https://github.com/sentioxyz/api/actions/workflows/cut-release.yaml/badge.svg)](https://github.com/sentioxyz/api/actions/workflows/cut-release.yaml)

TypeScript client for the [Sentio](https://sentio.xyz) API. The bindings are
generated from Sentio's protobuf definitions with
[protobuf-es](https://github.com/bufbuild/protobuf-es) and call the REST API
through [connect-es](https://github.com/connectrpc/connect-es) with the
[@sentio/connect-gateway-es](https://github.com/sentioxyz/connect-gateway-es)
transport — fully typed requests and responses, including server-streaming
endpoints.

> **v2 is a breaking rewrite.** v1 (`openapi-ts` based: `client.setConfig` +
> static service classes) is replaced by connect-es style clients. The REST
> API itself is unchanged; see the examples below for the new shapes. The
> package is ESM-only and requires Node 24+.

## Setup

```
pnpm add @sentio/api
```

Create an API key under your project's settings on
[app.sentio.xyz](https://app.sentio.xyz).

## Usage

### Example 1: list dashboards

```ts
import { createSentioClient, WebService } from "@sentio/api";

const web = createSentioClient(WebService, {
  apiKey: process.env.SENTIO_API_KEY,
});
const dashboards = await web.listDashboards({
  ownerName: "sentio",
  slug: "coinbase",
});
console.log(dashboards);
```

### Example 2: insight query

```ts
import { createSentioClient, InsightsService } from "@sentio/api";

const insights = createSentioClient(InsightsService, {
  apiKey: process.env.SENTIO_API_KEY,
});

const res = await insights.query({
  projectOwner: "sentio",
  projectSlug: "coinbase",
  timeRange: {
    start: "now-30d",
    end: "now",
    step: 3600,
    timezone: "America/Los_Angeles",
  },
  limit: 20,
  queries: [
    {
      metricsQuery: {
        query: "cbETH_price",
      },
    },
  ],
});
console.log(res);
```

Request messages are plain partial objects (protobuf-es init shapes) — omitted
fields take their proto defaults.

### Several services over one transport

```ts
import { createClient, createSentioTransport, AnalyticService, WebService } from "@sentio/api";

const transport = createSentioTransport({ apiKey: process.env.SENTIO_API_KEY });
const web = createClient(WebService, transport);
const analytics = createClient(AnalyticService, transport);
```

### Message and enum types

Each service module exports its request/response types; deep-import them via
the `gen` subpath:

```ts
import type { Project } from "@sentio/api/gen/service/common/protos/common_pb.js";
```

### Options

`createSentioClient` / `createSentioTransport` accept:

- `apiKey` — sent as the `api-key` header.
- `baseUrl` — defaults to `https://app.sentio.xyz`.
- everything else from `GatewayTransportOptions`
  (`headers`, `fetch`, `interceptors`, `defaultTimeoutMs`, ...).

Errors are connect-es `ConnectError`s carrying the mapped gRPC code and the
server's `google.rpc.Status` details.

## REST / OpenAPI

The raw REST API is documented at [docs.sentio.xyz](https://docs.sentio.xyz/reference);
this repository also ships the [OpenAPI spec](./openapi.json) and a generated
[HTML reference](./doc). Both reflect the same API surface as the TypeScript
client.
