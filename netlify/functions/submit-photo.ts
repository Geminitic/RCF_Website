import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  console.log('Received photo submission', event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
