import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    etransfer: process.env.DONATION_ETRANSFER || '',
    cryptoWallet: process.env.DONATION_CRYPTO_WALLET || '',
    paypal: process.env.DONATION_PAYPAL_LINK || ''
  });
});

export default router;
