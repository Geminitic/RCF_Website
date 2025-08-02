import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(__dirname, '../db/requests.json');

interface RequestData {
  volunteers: Array<Record<string, unknown>>;
  orgs: Array<Record<string, unknown>>;
}

export async function readData(): Promise<RequestData> {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(content) as RequestData;
  } catch {
    return { volunteers: [], orgs: [] };
  }
}

export async function writeData(data: RequestData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}
