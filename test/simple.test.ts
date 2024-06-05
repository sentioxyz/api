import { Configuration, WebApi } from "../src";

describe("simple test", () => {
  test("getProjectList", async () => {
    const apiKey = process.env.SENTIO_API_KEY;
    expect(apiKey).toBeDefined();

    const config = new Configuration({
      apiKey: apiKey,
    });
    const api = new WebApi(config);
    const projects = await api.getProjectList();
    console.log(projects);
  });
});
