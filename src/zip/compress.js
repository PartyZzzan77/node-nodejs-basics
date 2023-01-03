import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
  const srcPath = new URL('./files/fileToCompress.txt', import.meta.url);
  const distPath = new URL('./files/archive.gz', import.meta.url);
  const errMessage = 'FS operation failed';
  const rs = createReadStream(srcPath);
  const ws = createWriteStream(distPath);
  const gzip = createGzip();

  await pipeline(rs, gzip, ws, (err) => {
    if (err) {
      process.stdout.write(errMessage + '\n');
      process.exitCode = 1;
    }
  });
};

await compress();
