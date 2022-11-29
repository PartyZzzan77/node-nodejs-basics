import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { access, constants } from 'node:fs/promises';

const create = async () => {
  const greeting = Buffer.from('I am fresh and young');
  const path = './files/fresh.txt';
  const err = 'FS operation failed';

  try {
    await access(path);
    process.stdout.write(err + '\n');
  } catch (error) {
    await writeFile(path, greeting);
  }
};

await create();
