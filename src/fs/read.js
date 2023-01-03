import { access } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

const read = async () => {
  const path = new URL('./files/fileToRead.txt', import.meta.url);
  const errMessage = 'FS operation failed';

  try {
    await access(path);
    const content = await readFile(path, { encoding: 'utf8' });
    process.stdout.write(content + '\n');
  } catch {
    throw new Error(errMessage);
  }
};

await read();
