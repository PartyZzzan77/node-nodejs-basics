import { readdir } from 'node:fs/promises';

const list = async () => {
  const path = new URL('./files', import.meta.url);
  const errMessage = 'FS operation failed';

  try {
    const files = await readdir(path);
    for (const file of files) {
      process.stdout.write(file + '\n');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(errMessage);
    }
  }
};

await list();
