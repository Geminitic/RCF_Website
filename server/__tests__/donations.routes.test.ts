import request from 'supertest';
import express from 'express';
import donationRoutes from '../routes/donations';

describe('GET /api/donations', () => {
  it('returns donation info from env', async () => {
    process.env.DONATION_ETRANSFER = 'test@example.com';
    process.env.DONATION_CRYPTO_WALLET = '0xtest';
    process.env.DONATION_PAYPAL_LINK = 'https://paypal.me/test';

    const app = express();
    app.use('/api/donations', donationRoutes);

    const res = await request(app).get('/api/donations');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      etransfer: 'test@example.com',
      cryptoWallet: '0xtest',
      paypal: 'https://paypal.me/test'
    });
  });
});
