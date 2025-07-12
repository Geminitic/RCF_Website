import Redis from 'ioredis';
import { Event } from '../types/event';

export class EventCache {
  private redis: Redis;
  private TTL = 3600; // 1 hour

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      retryStrategy: (times) => Math.min(times * 50, 2000)
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
