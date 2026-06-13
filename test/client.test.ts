import test from 'node:test'
import assert from 'node:assert/strict'
import {
  createSentioClient,
  createSentioTransport,
  createClient,
  DEFAULT_BASE_URL,
  AiService,
  AlertService,
  AnalyticService,
  SearchService,
  InsightsService,
  MoveService,
  ObservabilityService,
  PriceService,
  ProcessorService,
  ProcessorServiceExt,
  ForkService,
  SolidityAPIService,
  WebService,
} from '../src/index.js'

// A fetch stand-in that records the request the transport would send and
// answers with an empty-but-valid unary JSON body, so a client call resolves
// without touching the network. The transport calls fetch(url, init).
interface Captured {
  url: string
  method: string
  headers: Headers
}
function recordingFetch(capture: Partial<Captured>): typeof globalThis.fetch {
  return (async (url: string | URL | Request, init?: RequestInit) => {
    capture.url = String(url)
    capture.method = init?.method ?? 'GET'
    capture.headers = new Headers(init?.headers)
    return new Response('{}', {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  }) as typeof globalThis.fetch
}

// Drives one real unary call through the transport with the recording fetch.
async function callWith(options: Parameters<typeof createSentioClient>[1]) {
  const capture: Partial<Captured> = {}
  const client = createSentioClient(PriceService, { fetch: recordingFetch(capture), ...options })
  await client.listCoins({})
  return capture as Captured
}

test('apiKey is sent as the api-key header', async () => {
  const req = await callWith({ apiKey: 'secret-key' })
  assert.equal(req.headers.get('api-key'), 'secret-key')
})

test('no api-key header when apiKey is omitted', async () => {
  const req = await callWith({})
  assert.equal(req.headers.has('api-key'), false)
})

test('an explicit api-key header is not overridden by apiKey', async () => {
  const req = await callWith({ apiKey: 'from-option', headers: { 'api-key': 'explicit' } })
  assert.equal(req.headers.get('api-key'), 'explicit')
})

test('defaults to the app.sentio.xyz origin', async () => {
  const req = await callWith({ apiKey: 'k' })
  assert.ok(
    req.url.startsWith(DEFAULT_BASE_URL + '/'),
    `expected ${req.url} to start with ${DEFAULT_BASE_URL}`,
  )
  assert.equal(DEFAULT_BASE_URL, 'https://app.sentio.xyz')
})

test('a custom baseUrl is used and its trailing slash trimmed', async () => {
  const req = await callWith({ baseUrl: 'https://api-test.sentio.xyz/' })
  assert.ok(
    req.url.startsWith('https://api-test.sentio.xyz/'),
    `expected ${req.url} to use the custom origin`,
  )
  assert.ok(!req.url.startsWith('https://api-test.sentio.xyz//'), 'trailing slash not trimmed')
})

test('listCoins routes to GET /api/v1/prices/coins', async () => {
  const req = await callWith({ apiKey: 'k' })
  assert.equal(req.method, 'GET')
  assert.match(req.url, /\/api\/v1\/prices\/coins/)
})

test('one transport is shared across multiple service clients', async () => {
  const transport = createSentioTransport({ apiKey: 'shared' })
  const price = createClient(PriceService, transport)
  const web = createClient(WebService, transport)
  assert.equal(typeof price.listCoins, 'function')
  assert.equal(typeof web.listDashboards, 'function')
})

test('every exported service is a usable descriptor', () => {
  const services = [
    AiService,
    AlertService,
    AnalyticService,
    SearchService,
    InsightsService,
    MoveService,
    ObservabilityService,
    PriceService,
    ProcessorService,
    ProcessorServiceExt,
    ForkService,
    SolidityAPIService,
    WebService,
  ]
  for (const service of services) {
    assert.equal(typeof service.typeName, 'string')
    assert.ok(service.typeName.length > 0)
    // a client can be constructed and exposes at least one method
    const client = createSentioClient(service, { apiKey: 'k' }) as Record<string, unknown>
    const methods = Object.keys(client)
    assert.ok(methods.length > 0, `${service.typeName} has no methods`)
  }
})
