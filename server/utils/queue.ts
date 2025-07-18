import Queue from 'bull';

// Avoid creating a real Redis connection during tests
export const scraperQueue =
  process.env.NODE_ENV === 'test'
    ? ({} as any)
    : new Queue('event-scraping', {
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
