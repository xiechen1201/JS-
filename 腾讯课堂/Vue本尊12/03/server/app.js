const express = require("express");
const bodyParser = require("body-parser");
const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  next();
});

app.get("/get_todo", (req, res) => {
  const todoData = readTodo();

  res.json({
    code: 0,
    msg: "success",
    data: todoData
  });
});

app.post("/add_todo", (req, res) => {
  const todo = req.body.todo;
  todo.completed = todo.completed === "false" ? false : true;

  const todoData = readTodo();
  todoData.push(todo);

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: "success"
  });
});

app.post("/toggle_todo", (req, res) => {
  const id = req.body.id;
  let todoData = readTodo();

  todoData = todoData.map((el) => {
    if (el.id === id) {
      el.completed = !el.completed;
    }

    return el;
  });

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: "success"
  });
});

app.post("/remove_todo", (req, res) => {
  const id = req.body.id;
  let todoData = readTodo();

  todoData = todoData.filter((el) => {
    return el.id !== id;
  });

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: "success"
  });
});

function writeTodo(todoData) {
  writeFileSync(resolve(__dirname, "data/todo.json"), JSON.stringify(todoData));
}

function readTodo() {
  const todoData = JSON.parse(
    readFileSync(resolve(__dirname, "data/todo.json"), "utf8") || "[]"
  );

  return todoData;
}

app.listen(8080, function () {
  console.log("Ok!!!");
});
