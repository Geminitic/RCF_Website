import { BaseScraper } from './base.scraper';
import { Event } from '../types/event';

export class EventScraper extends BaseScraper {
  async scrape(url: string): Promise<Event[]> {
    const html = await this.fetchPage(url);
    if (!html) return [];

    return this.extractEvents(html, url);
  }

  // Placeholder for actual extraction logic
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private extractEvents(html: string, sourceUrl: string): Event[] {
    return [];
  }
}
