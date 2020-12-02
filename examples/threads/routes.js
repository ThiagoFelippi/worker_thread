const { Router } = require("express");
const route = Router();
const heavyProcessing = require("./heavyProcessing");
const heavyProcessingThread = require("./heavyProcessingThread");

route.get("/", (req, res) => {
  res.send("Processamento leve");
});

route.get("/pesado", (req, res) => {
  const feedback = heavyProcessing(3000000000);
  res.send(feedback);
});

route.get("/pesado/thread", (req, res) => {
  heavyProcessingThread(3000000000);

  res.send("Processamento pesado");
});

module.exports = route;
