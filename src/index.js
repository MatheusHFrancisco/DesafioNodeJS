const conexao = require("./connectors/mongoDbConnector.js");
const express = require("express");
const routes = require("./router/routes.js");
const { v4: uuidv4 } = require("uuid");
const app = express();
conexao.mongoose;
uuidv4();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", routes);

module.exports = app;
