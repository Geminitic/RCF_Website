import { EventScraper } from '../scrapers/event.scraper';
import { EventCache } from '../db/cache';
import { Event } from '../types/event';

const SCRAPE_URLS = process.env.SCRAPE_URLS?.split(',') || ['https://example.org'];
const cache = new EventCache();

export async function scrapeAndCache(): Promise<Event[]> {
  const scraper = new EventScraper();
  let events: Event[] = [];

  for (const url of SCRAPE_URLS) {
    const scraped = await scraper.scrape(url);
    events = events.concat(scraped);
  }

  if (events.length > 0) {
    await cache.set('events', events);
  }

  return events;
}

export { cache };
