import { Router, Request, Response } from 'express';
import { readData, writeData } from '../utils/storage';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { org, contact, email, message } = req.body;
  if (!org || !contact || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const data = await readData();
  data.orgs.push({ org, contact, email, message, date: new Date().toISOString() });
  await writeData(data);
  res.status(201).json({ success: true });
});

export default router;
