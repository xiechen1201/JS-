const express = require("express");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const app = express();

app.all("*", (rep, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "POST,GET");
  next();
});

app.get("/imgs", (req, res) => {
  const imageData = readFileSync(resolve(__dirname, "./image.json"), "utf-8");
  res.send(JSON.parse(imageData))
});

app.listen(3000, () => {
  console.log("123");
});
