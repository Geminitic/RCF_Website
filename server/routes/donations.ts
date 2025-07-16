import { Router } from 'express';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { validateDonation } from '../validators/donation.validator';
import { logger } from '../utils/logger';

const router = Router();
const DATA_FILE = 'server/data/donations.json';

router.get('/', async (_req, res) => {
  try {
    const data = fs.existsSync(DATA_FILE)
      ? JSON.parse(await fs.promises.readFile(DATA_FILE, 'utf-8'))
      : [];
    res.json(data);
  } catch (err) {
    logger.error('Failed to read donations:', err);
    res.status(500).json({ error: 'Failed to read donations' });
  }
});

router.post('/', async (req, res) => {
  const donation = validateDonation({ ...req.body, id: uuidv4() });
  if (!donation) {
    return res.status(400).json({ error: 'Invalid donation data' });
  }
  try {
    const data = fs.existsSync(DATA_FILE)
      ? JSON.parse(await fs.promises.readFile(DATA_FILE, 'utf-8'))
      : [];
    data.push(donation);
    await fs.promises.mkdir('server/data', { recursive: true });
    await fs.promises.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(201).json(donation);
  } catch (err) {
    logger.error('Failed to save donation:', err);
    res.status(500).json({ error: 'Failed to save donation' });
  }
});

export default router;
