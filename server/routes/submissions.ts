import { Router } from 'express';
import { saveSubmission } from '../utils/submissions';

const router = Router();

router.post('/volunteer', async (req, res) => {
  await saveSubmission('volunteer', req.body);
  res.status(201).json({ status: 'ok' });
});

router.post('/join', async (req, res) => {
  await saveSubmission('join', req.body);
  res.status(201).json({ status: 'ok' });
});

export default router;
