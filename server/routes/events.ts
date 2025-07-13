import { Router } from 'express';
import { validateEvent } from '../validators/event.validator';
import { scrapeAndCache, cache } from '../utils/scrape';

const router = Router();

router.get('/', async (_req, res) => {
  let events = await cache.get('events');
  const ttl = await cache.ttl('events');
  if (!events || ttl <= 0) {
    events = await scrapeAndCache();
  }
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
