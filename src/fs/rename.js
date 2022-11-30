import { rename as renameFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';

const rename = async () => {
  const srcPath = './files/wrongFilename.txt';
  const dirPath = './files/properFilename.md';
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
