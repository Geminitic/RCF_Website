import { useState, useEffect, useCallback, useRef } from 'react';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<any>>();
const STALE_TIME = 5 * 60 * 1000; // 5 minutes

export function useFetchWithCache<T>(key: string, fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetcherRef = useRef(fetcher);

  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  const fetchData = useCallback(async () => {
    setError(null);

    // Check cache first
    if (cache.has(key)) {
      const cached = cache.get(key)!;
      setData(cached.data);
      // If cache is stale, revalidate in background
      if (Date.now() - cached.timestamp > STALE_TIME) {
        console.log(`Cache for ${key} is stale, revalidating...`);
        setLoading(true); // Show loading indicator during revalidation
        try {
          const newData = await fetcherRef.current();
          cache.set(key, { data: newData, timestamp: Date.now() });
          setData(newData);
        } catch (err: any) {
          console.error(`Failed to revalidate ${key}:`, err);
          setError(err.message || 'Failed to revalidate data');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Not loading if fresh cache is used
      }
    } else {
      // No cache, fetch data
      setLoading(true);
      try {
        const newData = await fetcherRef.current();
        cache.set(key, { data: newData, timestamp: Date.now() });
        setData(newData);
      } catch (err: any) {
        console.error(`Failed to fetch ${key}:`, err);
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }
  }, [key]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    cache.delete(key); // Invalidate cache to force a fresh fetch
    fetchData();
  }, [key, fetchData]);

  return { data, loading, error, refetch };
}
