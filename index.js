const express = require("express");
// const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
const { logger, setupLogger } = require("./logger");

const middleware = (req, res, next) => {
  setupLogger("Habib");
  next();
};

const testLogger = (req, res) => {
  console.log("hi im in api");
  logger().info("hi im in api");
  res.status(200).send({
    status: "ok",
  });
};

app.use("/", middleware, testLogger);

module.exports = app;
