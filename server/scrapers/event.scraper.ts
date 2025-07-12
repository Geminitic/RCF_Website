import * as cheerio from 'cheerio';
import { validateEvent } from '../validators/event.validator';
import { Event } from '../types/event';
import { BaseScraper } from './base.scraper';

export class EventScraper extends BaseScraper {
  async scrape(url: string): Promise<Event[]> {
    const html = await this.fetchPage(url);
    if (!html) return [];

    return this.extractEvents(html, url);
  }

  private extractEvents(html: string, sourceUrl: string): Event[] {
    const $ = cheerio.load(html);
    const events: Event[] = [];

    $('.event').each((_, el) => {
      const title = $(el).find('h2').text().trim();
      const dateMatch = $(el).text().match(/\d{1,2}\/\d{1,2}\/\d{4}/);
      const event = validateEvent({
        id: `${Date.now()}-${Math.random()}`,
        title,
        description: $(el).text().trim(),
        date: dateMatch ? dateMatch[0] : undefined,
        source: sourceUrl,
        organizer: 'unknown',
        priority: 1,
        category: 'general',
        deadline: false,
        tags: []
      });
      if (event) events.push(event);
    });

    return events;
  }
}
