const {
  Worker,
  isMainThread,
  workerData,
  parentPort,
} = require("worker_threads");
const heavyProcessing = require("./heavyProcessing");

const newThread = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData });
    worker.once("online", () => {
      console.log("Nova thread");
    });

    worker.on("message", (msg) => {
      console.log(msg);
    });

    worker.once("exit", () => {
      console.log("Thread finalizada");
    });

    resolve();
  });
};

if (!isMainThread) {
  const feedback = heavyProcessing(workerData);
  parentPort.postMessage(feedback);

  // Faz a thread esperar uma mensagem
  // parentPort.addListener("message", (msg) => {
  //   console.log(msg);
  // });
}

module.exports = newThread;
