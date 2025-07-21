import * as cheerio from 'cheerio';
import ical from 'node-ical';
import { validateEvent } from '../validators/event.validator';
import { Event } from '../types/event';
import { BaseScraper } from './base.scraper';

export class EventScraper extends BaseScraper {
  async scrape(url: string): Promise<Event[]> {
    if (url.endsWith('.ics')) {
      return this.scrapeICS(url);
    }

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

  private async scrapeICS(url: string): Promise<Event[]> {
    try {
      const data = await (ical.async.fromURL as any)(url, { proxy: false });
      const events: Event[] = [];

      Object.values(data).forEach((entry: any) => {
        if (entry.type !== 'VEVENT') return;

        const event = validateEvent({
          id: entry.uid || `${Date.now()}-${Math.random()}`,
          title: entry.summary || 'Untitled Event',
          description: entry.description,
          date: entry.start ? entry.start.toISOString() : undefined,
          time: entry.start
            ? new Date(entry.start).toTimeString().slice(0, 5)
            : undefined,
          location: entry.location,
          link: entry.url,
          source: url,
          organizer: entry.organizer?.val || 'unknown',
          priority: typeof entry.priority === 'number' ? entry.priority : 1,
          category: Array.isArray(entry.categories)
            ? entry.categories[0]
            : 'general',
          deadline: false,
          tags: Array.isArray(entry.categories) ? entry.categories.slice(0, 5) : []
        });

        if (event) events.push(event);
      });

      return events;
    } catch (err) {
      console.error('ICS scrape failed:', err);
      return [];
    }
  }
}
