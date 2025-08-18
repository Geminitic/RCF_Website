import { Router } from 'express';
import { validateEvent } from '../validators/event.validator';
import { scrapeAndCache, cache } from '../utils/scrape';

const router = Router();

router.get('/', async (_req, res) => {
  let events = await cache.get('events');
  if (!events || (await cache.ttl('events')) <= 0) {
    events = await scrapeAndCache();
  }

  const lastUpdated =
    (await cache.get<{ lastUpdated: string }>('events:lastUpdated'))
      ?.lastUpdated || new Date().toISOString();
  const categories = [...new Set((events || []).map((e) => e.category))];
  const sources = [...new Set((events || []).map((e) => e.source))];

  res.json({
    events: events || [],
    metadata: {
      totalEvents: (events || []).length,
      lastUpdated,
      categories,
      sources,
    },
  });
});

router.post('/', async (req, res) => {
  const event = validateEvent(req.body);
  if (!event) {
    return res.status(400).json({ error: 'Invalid event data' });
  }
  const events = (await cache.get('events')) || [];
  events.push(event);
  await cache.set('events', events);
  await cache.set('events:lastUpdated', {
    lastUpdated: new Date().toISOString(),
  });
  res.status(201).json(event);
});

export default router;
