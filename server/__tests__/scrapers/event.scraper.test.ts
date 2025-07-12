import { EventScraper } from '../../scrapers/event.scraper';
import nock from 'nock';

describe('EventScraper', () => {
  let scraper: EventScraper;

  beforeEach(() => {
    scraper = new EventScraper();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should extract events from valid HTML', async () => {
    const mockHtml = `
      <div class="event">
        <h2>Workshop on Digital Marketing</h2>
        <p>Date: 15/12/2024</p>
        <p>Location: Damascus, Syria</p>
      </div>
    `;

    nock('https://example.org')
      .get('/')
      .reply(200, mockHtml);

    const events = await scraper.scrape('https://example.org');

    expect(events).toHaveLength(1);
    expect(events[0].title).toBe('Workshop on Digital Marketing');
    expect(events[0].date).toBe('15/12/2024');
  });
});
