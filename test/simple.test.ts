import { WebService } from "../src/index.js";
import { client } from "../src/client.gen.js";
import test from "node:test";
import assert from "assert";

test("getProjectList", async () => {
  const apiKey = process.env.SENTIO_API_KEY;
  assert(apiKey, "API key can't be found for the test");

  client.setConfig({
    auth: process.env.SENTIO_API_KEY,
  });
  const projects = await WebService.getProjectList();
  console.log(projects);
});
