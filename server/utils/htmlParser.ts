import { JSDOM } from 'jsdom';
import { logger } from './logger';

export function parseHTML(html: string): Document {
  try {
    const dom = new JSDOM(html);
    return dom.window.document;
  } catch (error) {
    logger.error('Failed to parse HTML', error);
    throw new Error('HTML parsing failed');
  }
}
