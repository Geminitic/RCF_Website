import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

export const createHttpClient = (): AxiosInstance => {
  const client = axios.create({
    timeout: 10000,
    proxy: false,
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; EventScraper/2.0)'
    }
  });

  axiosRetry(client, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => {
      return (
        axiosRetry.isNetworkOrIdempotentRequestError(error) ||
        error.response?.status === 429
      );
    }
  });

  return client;
};
