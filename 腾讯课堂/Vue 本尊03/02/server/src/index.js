const express = require("express");
const bodyParse = require("body-parser");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const app = express();
const myResult = [];

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "GET,POST");
  next();
});

/**
 * req: request
 * res: response
 *
 *
 */
app.post("/getQuestion", function (req, res) {
  const order = req.body.order;
  const questionData = JSON.parse(
    readFileSync(resolve(__dirname, "../data/question.json"), "utf8")
  );
  const questionResult = questionData[order];

  if (questionResult) {
    const { id, question, items } = questionResult;
    res.send({
      errCode: 0,
      msg: "ok",
      data: {
        id,
        question,
        items
      }
    });
  } else {
    res.send({
      errCode: 1,
      msg: "no_data",
      data: myResult
    });

    myResult = [];
  }
});

app.post("/uploadAnswer", function (req, res) {
  const { order, myAnswer } = req.body;
  const questionData = JSON.parse(
    readFileSync(resolve(__dirname, "../data/question.json"), "utf8")
  );

  const { id, question, items, answer } = questionData[order];
  myResult.push({
    qid: id,
    question,
    myAnswer: items[myAnswer],
    rightAnswer: items[answer],
    isRight: myAnswer == answer
  });

  res.send({
    errCode: 0,
    msg: "ok"
  });

  // res.send(myResult);
});

app.listen("8888", function () {
  console.log("Welcome to use Express on 8888");
});
