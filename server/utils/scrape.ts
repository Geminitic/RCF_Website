import { EventScraper } from '../scrapers/event.scraper';
import { EventCache } from '../db/cache';
import { Event } from '../types/event';

const SCRAPE_URLS = process.env.SCRAPE_URLS?.split(',') || [
  'https://example.org',
];
const cache = new EventCache();

export async function scrapeAndCache(): Promise<Event[]> {
  const scraper = new EventScraper();
  const allEvents = await Promise.all(
    SCRAPE_URLS.map((url) => scraper.scrape(url))
  );
  const events = allEvents.flat();

  if (events.length > 0) {
    await cache.set('events', events);
    await cache.set('events:lastUpdated', {
      lastUpdated: new Date().toISOString(),
    });
  }

  return events;
}

export { cache };
