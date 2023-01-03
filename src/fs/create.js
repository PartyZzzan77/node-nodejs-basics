import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { access } from 'node:fs/promises';

const create = async () => {
  const greeting = Buffer.from('I am fresh and young');
  const path = new URL('./files/fresh.txt', import.meta.url);
  const errMessage = 'FS operation failed';

  try {
    const existFile = await access(path);
    if (!existFile) {
      throw new Error(errMessage);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(path, greeting);
      return;
    }
    process.stdout.write(error.toString() + '\n');
  }
};

await create();
