import request from 'supertest';
import express from 'express';
import fs from 'fs';
import donationRoutes from '../routes/donations';

const app = express();
app.use(express.json());
app.use('/api/donations', donationRoutes);

afterEach(() => {
  if (fs.existsSync('server/data/donations.json')) {
    fs.rmSync('server/data/donations.json');
  }
});

describe('donations routes', () => {
  it('stores a donation and returns it', async () => {
    const res = await request(app).post('/api/donations').send({
      method: 'paypal',
      amount: 5,
      currency: 'CAD',
      email: 'test@example.com'
    });
    expect(res.status).toBe(201);

    const getRes = await request(app).get('/api/donations');
    expect(getRes.status).toBe(200);
    expect(getRes.body.length).toBe(1);
  });
});
