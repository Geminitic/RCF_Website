import { Router } from 'express';
import { EventCache } from '../db/cache';
import { validateEvent } from '../validators/event.validator';

const router = Router();
const cache = new EventCache();

router.get('/', async (_req, res) => {
  const events = await cache.get('events');
  res.json(events || []);
});

router.post('/', async (req, res) => {
  const event = validateEvent(req.body);
  if (!event) {
    return res.status(400).json({ error: 'Invalid event data' });
  }
  const events = (await cache.get('events')) || [];
  events.push(event);
  await cache.set('events', events);
  res.status(201).json(event);
});

export default router;
