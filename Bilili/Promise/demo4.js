// ## Promise.all() 方法

const fs = require("fs");

function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err || isSetError) {
        reject("拒绝承诺！！！");
      }

      const resData = JSON.parse(data);
      resolve(resData);
    });
  });
}

/* readFile("./data/user.json").then((result) => {
  console.log(result);
});
readFile("./data/course.json").then((result) => {
  console.log(result);
});
readFile("./data/userCourse.json").then((result) => {
  console.log(result);
}); */

// 合并三个文件的内容为一个数组，并且按照顺序排列，如果一个读取失败那么让这个数据聚合返回失败的状态
// Promise.all 接收一个可迭代对象，例如数组。
// 主要是启动多个异步任务并发运行，当所有任务返回结果后完成
// Promise.all 并不要求必须为 Promise 对象，如果不是 Promise 对象，直接 resolve 状态

const promises = Promise.all([readFile("./data/user.json"), readFile("./data/course.json"), readFile("./data/userCourse.json")]);

// 以数组的方式返回结果
promises.then((res) => {
  console.log(res);
});

// 有一个 Promise 是拒绝状态，那么整个 Promise 就是拒绝状态
// 失败的原因作为 Promise 拒绝的原因
const promises1 = Promise.all([readFile("./data/user.json", true), readFile("./data/course.json"), readFile("./data/userCourse.json")]);

promises1.catch((err) => {
  console.log(err);
});

// Promsie.resolve() 等于 new Promise((resolve)=>{ resolve() })