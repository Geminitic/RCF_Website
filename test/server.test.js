import test from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from '../server/server.js';

test('health endpoint', async () => {
  const res = await request(app).get('/api/health');
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.status, 'healthy');
});
