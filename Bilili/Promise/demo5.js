// ## Promise.race() 方法

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

// Promise.race() 接收一个可迭代的对象，例如数组
// 谁先完成就返回谁的 Promsie（无论是兑现还是拒绝）
let promise = Promise.race([readFile("./data/user.json", true), readFile("./data/course.json"), readFile("./data/userCourse.json")]);

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 一般测试资源或者接口的响应速度