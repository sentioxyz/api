import { Configuration, WebApi } from "../src/index.js";
import test from "node:test";
import assert from "assert";

test("getProjectList", async () => {
  const apiKey = process.env.SENTIO_API_KEY;
  assert(apiKey, "API key can't be found for the test");

  const config = new Configuration({
    apiKey,
  });
  const api = new WebApi(config);
  const projects = await api.getProjectList();
  console.log(projects);
});
