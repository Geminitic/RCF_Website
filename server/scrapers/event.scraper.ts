import { BaseScraper } from './base.scraper';
import { Event } from '../types/event';

export class EventScraper extends BaseScraper {
  async scrape(url: string): Promise<Event[]> {
    const html = await this.fetchPage(url);
    if (!html) return [];

    return this.extractEvents(html, url);
  }

  private extractEvents(html: string, sourceUrl: string): Event[] {
    // Your existing extraction logic, but refactored
    return [];
  }
}
