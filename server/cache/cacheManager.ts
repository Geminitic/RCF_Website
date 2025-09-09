interface CacheEntry<T> {
  data: T;
  expiry: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

export function setCache<T>(key: string, value: T, ttlMs: number): void {
  const expiry = Date.now() + ttlMs;
  cache.set(key, { data: value, expiry });
}

export function getCache<T>(key: string): CacheEntry<T> | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;

  if (!entry) {
    return null;
  }

  if (entry.expiry < Date.now()) {
    cache.delete(key);
    return null;
  }

  return entry;
}

export function clearCache(key: string): void {
  cache.delete(key);
}

export function clearAllCache(): void {
  cache.clear();
}

export function getCacheKeys(prefix: string = ''): string[] {
  return Array.from(cache.keys()).filter((key) => key.startsWith(prefix));
}

export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()),
  };
}
