import { client, WebService } from "../src/index.js";
import test from "node:test";
import assert from "assert";

test("listDashboards", async () => {
  const apiKey = process.env.SENTIO_API_KEY;
  assert(apiKey, "API key can't be found for the test");

  client.setConfig({
    auth: process.env.SENTIO_API_KEY,
  });
  const dashboards = await WebService.listDashboards();
  console.log(dashboards);
});
