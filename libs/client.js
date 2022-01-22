import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'noriyu',
  apiKey: process.env.API_KEY,
});
