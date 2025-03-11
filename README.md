# Sentio API

[![npm version](https://badge.fury.io/js/@sentio%2Fapi.svg)](https://npmjs.com/package/@sentio/api) [![Release](https://github.com/sentioxyz/api/actions/workflows/cut-release.yaml/badge.svg)](https://github.com/sentioxyz/api/actions/workflows/cut-release.yaml)

## Setup

```
pnpm add @sentio/api
```

## Usage

### Example 1: get project list

```ts
import { client, WebService } from "@sentio/api";

client.setConfig({
  auth: process.env.SENTIO_API_KEY,
});
const projects = await WebService.getProjectList();
console.log(projects);
```

### Example 2: insight query

```ts
import { client, DataService } from "@sentio/api";

client.setConfig({
  auth: process.env.SENTIO_API_KEY,
});

const res = await DataService.query({
  path: {
    owner: "sentio",
    slug: "coinbase",
  },
  body: {
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
          alias: "",
          id: "a",
          labelSelector: {},
          aggregate: undefined,
          functions: [],
          disabled: false,
        },
        dataSource: "METRICS",
        sourceName: "",
      },
    ],
    formulas: [],
    cachePolicy: {
      noCache: false,
      cacheTtlSecs: 1296000,
      cacheRefreshTtlSecs: 1800,
    },
  },
});
console.log(res);
```

## Documentation

[Sentio API Reference](https://docs.sentio.xyz/reference)
