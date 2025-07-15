import Redis from 'ioredis';

// Use in-memory Redis mock when running tests to avoid external dependency
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MockRedis = process.env.NODE_ENV === 'test' ? require('ioredis-mock') : null;
import { Event } from '../types/event';

export class EventCache {
  private redis: Redis;
  private TTL = 3600; // 1 hour

  constructor() {
    const RedisClient = (process.env.NODE_ENV === 'test' && MockRedis) || Redis;
    this.redis = new RedisClient({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      retryStrategy: (times: number) => Math.min(times * 50, 2000)
    });
  }

  async get(key: string): Promise<Event[] | null> {
    try {
      const data = await this.redis.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  async ttl(key: string): Promise<number> {
    try {
      return await this.redis.ttl(key);
    } catch (error) {
      console.error('Cache ttl error:', error);
      return -2;
    }
  }

  async set(key: string, events: Event[]): Promise<void> {
    try {
      await this.redis.setex(key, this.TTL, JSON.stringify(events));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }

  async invalidate(): Promise<void> {
    try {
      await this.redis.flushdb();
    } catch (error) {
      console.error('Cache invalidate error:', error);
    }
  }
}
