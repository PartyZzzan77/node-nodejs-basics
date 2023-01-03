import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
  const path = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
  const file = await readFile(path);
  const hash = createHash('sha256');
  const hex = hash.update(file).digest('hex');

  process.stdout.write(hex + '\n');
};

await calculateHash();
