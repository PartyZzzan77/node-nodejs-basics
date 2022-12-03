import fs from 'node:fs';
import { pipeline } from 'stream/promises';

const write = async () => {
  const path = new URL('./files/fileToWrite.txt', import.meta.url);
  const ws = fs.createWriteStream(path);

  await pipeline(process.stdin, ws);
};

await write();
