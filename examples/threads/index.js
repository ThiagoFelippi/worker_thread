const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3001;

const start = () => {
  app.use(routes);
  app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
  });
};

module.exports = start;
