import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  fork('./files/script.js', args, {
    stdio: [0, 1, 2, 'ipc'],
  });
};

spawnChildProcess();
