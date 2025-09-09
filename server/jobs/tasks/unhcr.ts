import { BaseTask, TaskResult } from './base';
import { logger } from '../../utils/logger';
import { parseHTML } from '../../utils/htmlParser';

const DATA_URL = 'https://data.unhcr.org/en/situations/syria';
const FALLBACK_DATA_URL = 'https://data2.unhcr.org/en/situations/syria';

export class UNHCRRefugeeCountTask extends BaseTask {
  constructor() {
    super(
      'UNHCR Refugee Count',
      'refugee_count',
      // Cache for 12 hours - UNHCR typically updates once per day
      12 * 60 * 60 * 1000
    );
  }

  protected async fetchData(): Promise<TaskResult | null> {
    try {
      // Try primary source first
      return await this.scrapeUNHCRData(DATA_URL);
    } catch (error) {
      logger.warn(
        'Failed to fetch UNHCR data from primary source, trying fallback...',
        error
      );

      try {
        // Try fallback source
        return await this.scrapeUNHCRData(FALLBACK_DATA_URL);
      } catch (fallbackError) {
        logger.error(
          'Failed to fetch UNHCR data from fallback source',
          fallbackError
        );
        throw fallbackError;
      }
    }
  }

  private async scrapeUNHCRData(url: string): Promise<TaskResult | null> {
    const html = await this.fetchJSON(url, {
      headers: { Accept: 'text/html' },
    });
    const document = parseHTML(html);

    // Extract the refugee count
    const refugeeCountElement = document.querySelector('.figure-refugee');
    if (!refugeeCountElement) {
      throw new Error('Could not find refugee count element on UNHCR page');
    }

    const refugeeCountText = refugeeCountElement.textContent?.trim();
    if (!refugeeCountText) {
      throw new Error('Refugee count element found but contains no text');
    }

    // Parse the number, removing commas and other formatting
    const refugeeCount = parseInt(refugeeCountText.replace(/[^0-9]/g, ''), 10);
    if (isNaN(refugeeCount)) {
      throw new Error(
        `Failed to parse refugee count from text: ${refugeeCountText}`
      );
    }

    // Extract the last updated date
    const lastUpdatedElement = document.querySelector('.last-updated');
    const lastUpdatedText = lastUpdatedElement?.textContent?.trim() || '';

    // Parse the date - format is typically "Last updated DD MMM YYYY"
    const dateMatch = lastUpdatedText.match(
      /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/
    );
    let updated = new Date().toISOString();

    if (dateMatch) {
      const [_, day, month, year] = dateMatch;
      const monthMap: Record<string, number> = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
      };

      const monthNum = monthMap[month.substring(0, 3)] || 0;
      const date = new Date(parseInt(year), monthNum, parseInt(day));
      updated = date.toISOString();
    }

    return {
      value: refugeeCount,
      updated,
      lastUpdated: new Date().toISOString(),
      source: 'UNHCR',
    };
  }
}
