import axios from 'axios';
import * as cheerio from 'cheerio';
import { validateEvent } from '../validators/event.validator';

export class EventScraper {
  async scrape(url: string) {
    const { data } = await axios.get(url, { proxy: false });
    const $ = cheerio.load(data);
    const events: any[] = [];
    $('.event').each((_, el) => {
      const title = $(el).find('h2').text().trim();
      const dateMatch = $(el).text().match(/\d{1,2}\/\d{1,2}\/\d{4}/);
      const event = validateEvent({
        id: `${Date.now()}-${Math.random()}`,
        title,
        description: $(el).text().trim(),
        date: dateMatch ? dateMatch[0] : undefined,
        source: url,
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
