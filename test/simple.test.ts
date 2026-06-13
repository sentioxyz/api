import test from 'node:test'
import assert from 'node:assert/strict'
import { createSentioClient, createSentioTransport, WebService, InsightsService } from '../src/index.js'

test('constructs clients offline', () => {
  const transport = createSentioTransport({ apiKey: 'dummy' })
  assert.ok(transport)
  const web = createSentioClient(WebService, { apiKey: 'dummy' })
  assert.equal(typeof web.listDashboards, 'function')
  const insights = createSentioClient(InsightsService, { apiKey: 'dummy' })
  assert.equal(typeof insights.query, 'function')
})

test('listDashboards', { skip: !process.env.SENTIO_API_KEY }, async () => {
  const web = createSentioClient(WebService, { apiKey: process.env.SENTIO_API_KEY })
  const dashboards = await web.listDashboards({})
  console.log(dashboards)
})
