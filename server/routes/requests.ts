import { Router } from 'express';
import path from 'path';
import { promises as fs } from 'fs';

const router = Router();
const dataDir = path.join(__dirname, '../db');
const volunteerFile = path.join(dataDir, 'volunteers.json');
const orgFile = path.join(dataDir, 'organizations.json');

async function appendData(file: string, entry: any) {
  const data = await fs.readFile(file, 'utf8').catch(() => '[]');
  const arr = JSON.parse(data);
  arr.push(entry);
  await fs.writeFile(file, JSON.stringify(arr, null, 2));
}

router.post('/volunteers', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  const entry = { name, email, message, submittedAt: new Date().toISOString() };
  await appendData(volunteerFile, entry);
  res.status(201).json({ success: true });
});

router.post('/organizations', async (req, res) => {
  const { org, contact, email, message } = req.body;
  if (!org || !contact || !email) {
    return res.status(400).json({ error: 'Organization, contact and email required' });
  }
  const entry = { org, contact, email, message, submittedAt: new Date().toISOString() };
  await appendData(orgFile, entry);
  res.status(201).json({ success: true });
});

export default router;
