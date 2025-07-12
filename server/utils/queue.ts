import Bull from 'bull';

export const scraperQueue = new Bull('scraper', {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379
  }
});
