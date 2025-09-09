import { CronJob } from 'cron';
import { UNHCRRefugeeCountTask } from './tasks/unhcr';
import { logger } from '../utils/logger';

// Initialize tasks
const tasks = [
  new UNHCRRefugeeCountTask(),
  // Add more tasks here as they're implemented
  // new IDPCountTask(),
  // new AidCountTask(),
  // new ReturneeCountTask(),
];

/**
 * Schedule all data refresh jobs
 */
export function scheduleJobs(): void {
  logger.info('Scheduling data refresh jobs...');

  // Run all tasks immediately on startup
  runAllTasks();

  // Schedule regular task execution (every 6 hours)
  const job = new CronJob('0 */6 * * *', () => {
    logger.info('Running scheduled data refresh...');
    runAllTasks();
  });

  job.start();
  logger.info('Jobs scheduled successfully');
}

/**
 * Run all data collection tasks
 */
async function runAllTasks(): Promise<void> {
  logger.info('Running all data collection tasks...');

  for (const task of tasks) {
    try {
      await task.execute();
    } catch (error) {
      logger.error('Task execution failed:', error);
      // Continue with other tasks
    }
  }

  logger.info('All tasks completed');
}
