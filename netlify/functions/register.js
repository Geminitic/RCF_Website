import { writeFile, mkdir, readFile } from 'fs/promises';

export async function handler(event) {
  const data = JSON.parse(event.body || '{}');
  const dir = '/tmp/rcf-data';
  await mkdir(dir, { recursive: true });
  const file = `${dir}/registrations.json`;
  let existing = [];
  try {
    existing = JSON.parse(await readFile(file, 'utf-8'));
  } catch {}
  existing.push({ ...data, date: new Date().toISOString() });
  await writeFile(file, JSON.stringify(existing, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'registered' })
  };
}
