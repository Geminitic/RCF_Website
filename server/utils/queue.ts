import Bull from 'bull';

// During tests we avoid instantiating a real Bull queue since it
// attempts to connect to Redis. Instead we export a minimal stub.
export const scraperQueue: Bull.Queue =
  process.env.NODE_ENV === 'test'
    ? ({
        process: () => {},
        add: async () => {}
      } as unknown as Bull.Queue)
    : new Bull('event-scraping', {
        redis: {
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT || '6379')
        }
      });

export const rateLimiter = new Map<string, number>();

export function checkRateLimit(domain: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimiter.get(domain) || 0;

  if (now - lastRequest < 1000) {
    return false;
  }

  rateLimiter.set(domain, now);
  return true;
}
