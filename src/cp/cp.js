import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  fork('./files/script.js', args);
};

spawnChildProcess();
