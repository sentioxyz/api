import { Configuration, DefaultApi } from "../src";
import  { assert } from "chai";
import fetch from "node-fetch"

describe("simple test", () => {
  beforeAll(() => {
    // @ts-ignore TODO find better way to inject browser compatible fetch
    global.fetch = fetch
  })
  test('use jsdom in this test file', async () => {
    const apiKey = process.env.SENTIO_API_KEY
    assert(apiKey, "API key can't be found for the test")

    const config = new Configuration({
      apiKey: apiKey,
    })
    const api = new DefaultApi(config)
    const user = await api.getUser()
    console.log(user)
  });
})