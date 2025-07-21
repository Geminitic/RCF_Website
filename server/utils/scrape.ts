import { EventScraper } from '../scrapers/event.scraper';
import { EventCache } from '../db/cache';
import { Event } from '../types/event';

const SCRAPE_URLS = process.env.SCRAPE_URLS?.split(',') || ['https://example.org'];
const cache = new EventCache();

export async function scrapeAndCache(): Promise<Event[]> {
  const scraper = new EventScraper();
  
  const scrapePromises = SCRAPE_URLS.map(url => 
    scraper.scrape(url).catch(error => {
      console.error(`Failed to scrape ${url}:`, error);
      return [];
    })
  );
  
  const results = await Promise.all(scrapePromises);
  const events = results.flat();

  if (events.length > 0) {
    await cache.set('events', events);
  }

  return events;
}

export { cache };
