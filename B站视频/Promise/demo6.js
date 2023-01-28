// ## async await

const fetch = require("node-fetch");

function getData() {
  fetch("http://study/jsplusplus.com/xiaoye.getXiaomiDatas?phone=true")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

getData()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// 完全逃离回调函数的形式？
// async 隐式让普通函数转换为异步函数，函数内部的返回值作为 resolve 的值
// 如果异步函数内部发生错误，则异步函数状态为 reject
// await 是一个操作符，等待一个 Promise 的返回结果的操作手段！！！等待 Promise 处理后的结果，等待的过程会阻塞后面代码的执行！！！
// 如果 await 返回一个 reject, 会破抛出异常
// 如果没有 await getData() 返回一个 Pendding 状态

async function logData() {
  const data = await getData();
  console.log(data);
}
