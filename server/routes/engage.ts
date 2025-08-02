import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const volunteerPath = path.join(__dirname, '..', 'db', 'volunteers.json');
const orgPath = path.join(__dirname, '..', 'db', 'organizations.json');

function append(filePath: string, data: any) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  let existing: any[] = [];
  try {
    existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    existing = [];
  }
  existing.push({ ...data, createdAt: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
}

router.post('/volunteer', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  append(volunteerPath, { name, email, message });
  res.status(201).json({ success: true });
});

router.post('/organization', (req, res) => {
  const { org, contact, email, message } = req.body;
  if (!org || !contact || !email) {
    return res
      .status(400)
      .json({ error: 'Organization, contact, and email are required' });
  }
  append(orgPath, { org, contact, email, message });
  res.status(201).json({ success: true });
});

export default router;
