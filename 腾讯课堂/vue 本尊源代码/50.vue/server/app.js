const express = require('express');
const bodyParser = require('body-parser');
const {
  readFileSync,
  writeFileSync
} = require('fs');

const {
  resolve
} = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * localhost:5173
 * 
 * localhost:8080
 * 
 * 不同端口 -> 跨域的问题
 * 
 * 1. 开发环境下 -> vite.config.js  vue.config.js  webpack.config.js proxy
 *    生产环境下  无法使用的
 *    
 *    前端的项目打包 -> 部署到了服务器，并且映射了域名
 *    服务端        -> 同一个服务器上   -> 跨域的现象？
 *    1. 因为前端已经部署到服务器  
 *          后端程序也部署到服务器上
 *       前端的包 -> 下载到浏览器，浏览器解析加载才能完成
 *                  跨域 -> JS下载到浏览器才执行 -> 异步请求 -> 浏览器环境下发出
 *       域名或者端口不一致 -> 跨域问题 
 *   
 * 2. JSONP跨域
 * 
 * 3. 后端设置cors -> Access-Control-Allow-Origin -> 源  *
 *                   Access-Control-Allow-methods -> GET,POST
 * 
 * 
 */

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
})

app.get('/get_todo', (req, res) => {
  const todoData = readTodo();

  res.json({
    code: 0,
    msg: 'ok',
    data: todoData
  });
});

app.post('/add_todo', (req, res) => {
  const todo = req.body.todo;
  /**
   * {
   *   id: xxxx,
   *   content: xxx,
   *   completed: false
   * }
   * 
   */
  todo.completed = todo.completed === 'false' ? false : true;
  const todoData = readTodo();
  todoData.push(todo);

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: 'ok'
  })
});

app.post('/toggle_todo', (req, res) => {
  const id = req.body.id;
  let todoData = readTodo();

  todoData = todoData.map(item => {
    if (item.id === id) {
      item.completed = !item.completed;
    }

    return item;
  })

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: 'ok'
  })
});

app.post('/remove_todo', (req, res) => {
  const id = req.body.id;
  let todoData = readTodo();

  todoData = todoData.filter(item => item.id !== id);

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: 'ok'
  })
})

function readTodo () {
  return JSON.parse(readFileSync(resolve(__dirname, 'data/todo.json'), 'utf8') || '[]');
}

function writeTodo (todoData) {
  writeFileSync(resolve(__dirname, 'data/todo.json'), JSON.stringify(todoData));
}

app.listen(8080, () => {
  console.log('ok');
})