import { unlink } from 'node:fs/promises';

const remove = async () => {
  const path = new URL('./files/fileToRemove.txt', import.meta.url);
  const errMessage = 'FS operation failed';

  try {
    await unlink(path);
  } catch {
    throw new Error(errMessage);
  }
};

await remove();
