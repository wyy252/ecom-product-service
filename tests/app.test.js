const test = require('node:test')
const assert = require('node:assert/strict')
const request = require('supertest')
const app = require('../src/app')

test('GET /health returns ok', async () => {
  const response = await request(app).get('/health')
  assert.equal(response.statusCode, 200)
  assert.equal(response.body.status, 'ok')
})

test('GET /products returns product list', async () => {
  const response = await request(app).get('/products')
  assert.equal(response.statusCode, 200)
  assert.ok(Array.isArray(response.body))
  assert.ok(response.body.length > 0)
})