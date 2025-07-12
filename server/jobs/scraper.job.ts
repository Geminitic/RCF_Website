import { scraperQueue } from '../utils/queue';
import { EventScraper } from '../scrapers/event.scraper';

scraperQueue.process(async (job) => {
  const { url } = job.data;
  const scraper = new EventScraper();
  const events = await scraper.scrape(url);

  await job.progress(100);
  return events;
});

scraperQueue.add(
  'scrape-all',
  { url: 'all' },
  {
    repeat: {
      cron: '0 */6 * * *'
    }
  }
);
