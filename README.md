# Sentio API

## Setup

```
pnpm add @sentio/api
```

## Usage

```ts
import { Configuration, WebApi } from "@sentio/api";


const config = new Configuration({
  apiKey: process.env.SENTIO_API_KEY,
});
const api = new WebApi(config);
const projects = await api.getProjectList();
console.log(projects);
```

## Documentation

[Sentio API Reference](https://docs.sentio.xyz/reference)
