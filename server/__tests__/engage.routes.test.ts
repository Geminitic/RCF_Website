import request from 'supertest';
import express from 'express';
import engageRoutes from '../routes/engage';

describe('Engagement routes', () => {
  const app = express();
  app.use(express.json());
  app.use('/api/engage', engageRoutes);

  it('accepts volunteer submissions', async () => {
    const res = await request(app)
      .post('/api/engage/volunteer')
      .send({ name: 'Test User', email: 'test@example.com' });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it('accepts organization registrations', async () => {
    const res = await request(app)
      .post('/api/engage/organization')
      .send({ org: 'Org', contact: 'Person', email: 'org@example.com' });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
  });
});
