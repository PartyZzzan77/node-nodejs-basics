import { cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const copy = async () => {
  const srcPath = new URL('./files', import.meta.url);
  const dirPath = new URL('./files_copy', import.meta.url);
  const errMessage = 'FS operation failed';

  try {
    if (!existsSync(srcPath) || existsSync(dirPath)) {
      throw new Error(errMessage);
    }
    await cp(srcPath, dirPath, { recursive: true });
  } catch (error) {
    console.log(error);
  }
};

copy();
