const express = require("express");
const server = express();

const helmet = require("helmet");
const projectsRouter = require("../projects/projects-router");

server.use(express.json());
server.use(helmet());

server.use("/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
