import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379
});

export class EventCache {
  static async get(key: string) {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  static async set(key: string, value: any, ttl = 3600) {
    await redis.set(key, JSON.stringify(value), 'EX', ttl);
  }
}
