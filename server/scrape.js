import { getEvents } from './server.js';

getEvents().then(events => {
  console.log(`Fetched ${events.length} events`);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
