import request from 'supertest';
import express from 'express';
import eventRoutes from '../../routes/events';

jest.mock('../../db/cache', () => {
  return {
    EventCache: jest.fn().mockImplementation(() => ({
      get: jest.fn().mockResolvedValue(null),
      set: jest.fn().mockResolvedValue(undefined)
    }))
  };
});

jest.mock('../../scrapers/event.scraper', () => {
  return {
    EventScraper: jest.fn().mockImplementation(() => ({
      scrape: jest.fn().mockResolvedValue([
        {
          id: '1',
          title: 'Test Event',
          source: 'https://example.org',
          organizer: 'ExampleOrg',
          priority: 1,
          category: 'general',
          deadline: false,
          tags: []
        }
      ])
    }))
  };
});

const app = express();
app.use('/api/events', eventRoutes);

describe('GET /api/events', () => {
  it('scrapes events when cache is empty', async () => {
    const res = await request(app).get('/api/events');
    expect(res.status).toBe(200);
    expect(res.body.events).toHaveLength(1);
    expect(res.body.metadata.totalEvents).toBe(1);
  });
});
