import { Router } from 'express';
import { EventCache } from '../db/cache';
import { validateEvent } from '../validators/event.validator';
import { EventScraper } from '../scrapers/event.scraper';

const router = Router();
const cache = new EventCache();

router.get('/', async (_req, res) => {
  let events = await cache.get('events');

  if (!events || events.length === 0) {
    try {
      const scraper = new EventScraper();
      const urls = (process.env.SCRAPER_URLS || 'https://example.org').split(',');
      events = [];

      for (const url of urls) {
        const scraped = await scraper.scrape(url.trim());
        events.push(...scraped);
      }

      await cache.set('events', events);
    } catch (err) {
      console.error('Failed to scrape events:', err);
      events = [];
    }
  }

  res.json({
    events: events,
    metadata: {
      totalEvents: events.length,
      lastUpdated: new Date().toISOString(),
      categories: [...new Set(events.map((e) => e.category))],
      sources: [...new Set(events.map((e) => e.organizer))]
    }
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
  res.status(201).json(event);
});

export default router;
