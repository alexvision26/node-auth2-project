const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const restricted = require("../auth/restricted-middleware");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
