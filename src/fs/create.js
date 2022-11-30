import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { access } from 'node:fs/promises';

const create = async () => {
  const greeting = Buffer.from('I am fresh and young');
  const path = './files/fresh.txt';
  const errMessage = 'FS operation failed';

  try {
    await access(path);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(path, greeting);
      return;
    }
    throw new Error(errMessage);
  }
};

await create();
