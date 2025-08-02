import fs from 'fs/promises';
import path from 'path';

const dataFile = path.join(process.cwd(), 'server', 'db', 'submissions.json');

interface Submission {
  type: string;
  data: Record<string, unknown>;
  timestamp: string;
}

export async function saveSubmission(type: string, data: Record<string, unknown>) {
  try {
    const existing = await fs.readFile(dataFile, 'utf8').catch(() => '[]');
    const submissions: Submission[] = JSON.parse(existing);
    submissions.push({ type, data, timestamp: new Date().toISOString() });
    await fs.writeFile(dataFile, JSON.stringify(submissions, null, 2));
  } catch (err) {
    console.error('saveSubmission error', err);
  }
}
