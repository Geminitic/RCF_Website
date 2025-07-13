import request from 'supertest';
import express from 'express';
import nock from 'nock';
import { EventScraper } from '../scrapers/event.scraper';
import eventRoutes from '../routes/events';
import { EventCache } from '../db/cache';
import Redis from 'ioredis';

jest.mock('ioredis', () => require('ioredis-mock'));

describe('Events API integration', () => {
  let app: express.Express;
  let cache: EventCache;

  beforeEach(async () => {
    app = express();
    app.use(express.json());
    app.use('/api/events', eventRoutes);
    cache = new EventCache();
    await new Redis().flushall();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('scrapes events, stores them in redis and returns via API', async () => {
    const mockHtml = `
      <div class="event">
        <h2>Community Meetup</h2>
        <p>Date: 01/02/2030</p>
      </div>
    `;

    nock('https://org.example')
      .get('/')
      .reply(200, mockHtml);

    const scraper = new EventScraper();
    const events = await scraper.scrape('https://org.example');

    await cache.set('events', events);

    const stored = await cache.get('events');
    expect(stored).toHaveLength(1);
    expect(stored![0].title).toBe('Community Meetup');

    const res = await request(app).get('/api/events');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].title).toBe('Community Meetup');
  });
});
