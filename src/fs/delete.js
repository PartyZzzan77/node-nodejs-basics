import { unlink } from 'node:fs/promises';

const remove = async () => {
  const path = './files/fileToRemove.txt';
  const errMessage = 'FS operation failed';

  try {
    await unlink(path);
  } catch {
    throw new Error(errMessage);
  }
};

await remove();
