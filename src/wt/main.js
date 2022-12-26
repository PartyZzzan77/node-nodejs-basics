import { Worker } from 'node:worker_threads';
import os from 'node:os';

const getKernelCompute = (w, pid) => {
    return new Promise((res, rej) => {
        w.on('message', (data) => res({ status: 'resolved', data: data, pid }));
        w.on('error', (err) =>
            res({ status: err.message.split("'")[0].trim(), data: null, pid })
        );
    });
};

const performCalculations = async () => {
    let counter = 10;
    let result = [];

    for await (const _ of os.cpus()) {
        counter++;
        const worker = new Worker('./worker.js', { workerData: counter });
        result.push(await getKernelCompute(worker, counter - 1));
    }

    console.dir(result);
};

await performCalculations();
