import * as cheerio from 'cheerio';
import ical, { VEvent } from 'node-ical';
import { validateEvent } from '../validators/event.validator';
import { Event } from '../types/event';
import { BaseScraper } from './base.scraper';

export class EventScraper extends BaseScraper {
  async scrape(url: string): Promise<Event[]> {
    if (url.endsWith('.ics')) {
      return this.scrapeICS(url);
    }

    const html = await this.fetchPage(url);
    return html ? this.extractEventsFromHtml(html, url) : [];
  }

  private extractEventsFromHtml(html: string, sourceUrl: string): Event[] {
    const $ = cheerio.load(html);
    return $('.event')
      .map((_, el) => {
        const title = $(el).find('h2').text().trim();
        const dateMatch = $(el)
          .text()
          .match(/\d{1,2}\/\d{1,2}\/\d{4}/);
        return validateEvent({
          id: `${Date.now()}-${Math.random()}`,
          title,
          description: $(el).text().trim(),
          date: dateMatch?.[0],
          source: sourceUrl,
          organizer: 'unknown',
          priority: 1,
          category: 'general',
          deadline: false,
          tags: [],
        });
      })
      .get()
      .filter((event): event is Event => event !== null);
  }

  private async scrapeICS(url: string): Promise<Event[]> {
    try {
      const data = await ical.async.fromURL(url);
      return Object.values(data)
        .filter((entry): entry is VEvent => entry.type === 'VEVENT')
        .map((entry) =>
          validateEvent({
            id: entry.uid || `${Date.now()}-${Math.random()}`,
            title: entry.summary || 'Untitled Event',
            description: entry.description,
            date: entry.start?.toISOString(),
            time: entry.start
              ? new Date(entry.start).toTimeString().slice(0, 5)
              : undefined,
            location: entry.location,
            link: entry.url,
            source: url,
            organizer: (entry.organizer as { val: string })?.val || 'unknown',
            priority: typeof entry.priority === 'number' ? entry.priority : 1,
            category: Array.isArray(entry.categories)
              ? entry.categories[0]
              : 'general',
            deadline: false,
            tags: Array.isArray(entry.categories)
              ? entry.categories.slice(0, 5)
              : [],
          })
        )
        .filter((event): event is Event => event !== null);
    } catch (err) {
      console.error('ICS scrape failed:', err);
      return [];
    }
  }
}
