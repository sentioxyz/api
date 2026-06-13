import test from 'node:test'
import { createSentioClient, PriceService, WebService } from '../src/index.js'

// Live tests against the real Sentio API. Skipped unless SENTIO_API_KEY is set.
const apiKey = process.env.SENTIO_API_KEY

test('PriceService.listCoins returns coins', { skip: !apiKey }, async () => {
  const price = createSentioClient(PriceService, { apiKey })
  const res = await price.listCoins({})
  console.log('coins:', res.coins.length)
})

test('WebService.listDashboards', { skip: !apiKey }, async () => {
  const web = createSentioClient(WebService, { apiKey })
  const dashboards = await web.listDashboards({})
  console.log(dashboards)
})
