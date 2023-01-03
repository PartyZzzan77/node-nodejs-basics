import { rename as renameFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';

const rename = async () => {
  const srcPath = new URL('./files/wrongFilename.txt', import.meta.url);
  const dirPath = new URL('./files/properFilename.md', import.meta.url);
  const errMessage = 'FS operation failed';

  try {
    await access(srcPath);
    await renameFile(srcPath, dirPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(errMessage);
    }
  }
};

await rename();
