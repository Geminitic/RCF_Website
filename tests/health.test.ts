import request from 'supertest';
import express from 'express';

const app = express();
app.get('/api/health', (req, res) => res.json({ status: 'healthy' }));

describe('health endpoint', () => {
  it('returns healthy', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
