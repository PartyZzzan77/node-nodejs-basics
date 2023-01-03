import { createReadStream } from 'node:fs';
import { pipeline } from 'stream/promises';

const read = async () => {
  const path = new URL('./files/fileToRead.txt', import.meta.url);
  const rs = createReadStream(path);

  await pipeline(rs, process.stdout);
};

await read();
