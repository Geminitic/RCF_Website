import { createHttpClient } from '../utils/http';
import { checkRateLimit } from '../utils/queue';
import { Event } from '../types/event';

export abstract class BaseScraper {
  protected httpClient = createHttpClient();

  // eslint-disable-next-line no-unused-vars
  abstract scrape(_url: string): Promise<Event[]>;

  protected async fetchPage(url: string): Promise<string | null> {
    try {
      const domain = new URL(url).hostname;

      if (!checkRateLimit(domain)) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      const response = await this.httpClient.get(url);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch ${url}:`, error.message);
      return null;
    }
  }
}
