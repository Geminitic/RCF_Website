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

  it('should parse events from an ICS feed', async () => {
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:12345
SUMMARY:Board Meeting
DESCRIPTION:Annual planning session
DTSTART:20301201T100000Z
DTEND:20301201T110000Z
LOCATION:Online
END:VEVENT
END:VCALENDAR`;

    nock('https://calendar.example')
      .get('/events.ics')
      .reply(200, ics, { 'Content-Type': 'text/calendar' });

    const oldProxy = process.env.HTTP_PROXY;
    delete process.env.HTTP_PROXY;
    delete process.env.http_proxy;

    const events = await scraper.scrape('https://calendar.example/events.ics');

    process.env.HTTP_PROXY = oldProxy;

    expect(events).toHaveLength(1);
    expect(events[0].title).toBe('Board Meeting');
    expect(events[0].location).toBe('Online');
  });
});
