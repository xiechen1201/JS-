const express = require("express");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "*");
  next();
});

app.post("/get_news", (req, res) => {
  const nid = req.body.nid;
  const newsData = JSON.parse(
    readFileSync(resolve(__dirname, "./data.json"),"utf8")
  );

  let lastIndex = 0;

  if (nid) {
    if (nid !== newsData[newsData.length - 1]) {
      lastIndex = newsData.findInex((el) => el.id === nid);

      res.send({
        err_code: 0,
        err_msg: "ok",
        data: newsData.slice(lastIndex + 1)
      });
    } else {
      res.send({
        err_code: 0,
        err_msg: "ok",
        data: null
      });
    }

  } else {
    res.send({
      err_code: 0,
      err_msg: "ok",
      data: newsData
    });
  }
});

app.listen(3000, () => {
  console.log("Welcome");
});
