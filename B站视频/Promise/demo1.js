/* 
// 高阶函数：一个函数作为另一个函数的参数或者类似闭包返回一个函数
function doSth(t, cb) {
  return function () {
    if (--t == 0) {
      cb();
    }
  };
}

function logSth(cb) {
  console.log("我终于找到女朋友了！");
}

// 返回一个函数
let fn = doSth(4, logSth);
fn();
fn();
fn();
// 执行四次之后执行 logSth 方法
fn();  */

// ##### 我现在想在 fn() 执行之后再执行一个回调应该怎么做呢？

/* 
function doSth(t, cb) {
  return function () {
    if (--t == 0) {
      cb();
    }
  };
}

function logSth(cb) {
  console.log("我终于找到女朋友了！");
  cb();
}

function logSth2(cb) {
  console.log("我分手了！");
  // 如何还想继续 cd 如何怎么做呢？
  // 引出回调地狱。
  cb();
}

// 返回一个函数
let fn = doSth(4, logSth.bind(null, logSth2));
fn();
fn();
fn();
// 执行四次之后执行 logSth 方法
fn(); */

// #### 回调地狱

/* function doSth(t) {
  return function () {
    if (--t === 0) {
      logSth(function () {
        logSth2(function () {
          logSth3();
        });
      });
    }
  };
}

const fn = doSth(4);
fn();
fn();
fn();
fn();

function logSth(cb) {
  console.log("我终于找到女朋友了！");
  cb()
}

function logSth2(cb) {
  console.log("我分手了！");
  cb()
}

function logSth3() {
  console.log("我又复合了！");
} */

// 这只是一个模拟，维护的时候是不好维护的

// #### Ajax 常见问题

// 模拟 Ajax 的请求
/* $.ajax({
  success(data) {
    $.ajax({
      data,
      success(data1) {
        $.ajax({
          data: data1,
          success(data2){

          }
        });
      },
    });
  },
});
 */
// ajax 本身是异步请求数据，某些时候我们需要同步执行（上一个 ajax 返回结果再去执行下一个 ajax）
// 异步：请求 ajax 的时候不阻塞后面代码的执行！！！

// 这两个 ajax 会同时执行，无法确定谁先放回结果
/* $.ajax({})
$.ajax({}) */

// ## Promise

/**
 * Promise 英文意为承诺
 * 有承诺就肯定有实现承诺和不兑现承诺，另外还有等待承诺
 * 分别对应 Promise 的 resolve(已解决) reject(拒绝) pending(等待)
 *
 * Promise 是解决异步流程化的一种手段！！！
 * 异步本身是各干各的，但往往需要一些流程话的东西（等待上一个异步返回的结果，再去处理下一个异步）
 * Promise 本身不是异步。
 *
 * Promse 是一个构造函数，需要进行实例化，参数为一个 excutor 执行器，执行器有两个参数 resolve 和 reject，这两个参数都是函数。
 * 执行器在实例化 Promise 的时候立即执行。
 *  */

/* 
let promse = new Promise((resolve, reject) => {
  console.log(1); // 先执行
  //   resolve("承诺实现");
  reject("拒绝承诺")

});
console.log(2); // 再执行，证明 exctor 是同步执行！！！

// 实例化对象都用 then 方法，then 方法的参数仍然是一个回调函数，
// then 方法的第一个参数是 resolve() 传递的参数
promse.then(
  (res) => {
    console.log(res);
  }, 
  // 第二个回调函数是 reject() 传递的参数
  (err) => {
    console.log(err)
  }
); */

/* let promse = new Promise((resolve, reject) => {
  resolve("承诺实现");
});

// then 方法是异步调用的！！！
promse.then(
  (res) => {
    console.log(res); // 再执行 resolve 的结果
  },
  (err) => {
    console.log(err);
  }
);

console.log("Global"); // 先执行 Global  */

// ## Promise 的状态
/* resolve reject pending
pending >> resolve 或者
pending >> reject 反过来是不行的
Promise 的状态只能是一种，落定后无法逆转！！！ */

// ##

/* let promse = new Promise((resolve, reject) => {
  resolve("承诺实现");
});
// 每一个 then 方法执行后返回一个新的 Promise 
promse
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  });
console.log("Global"); */

/* let promse = new Promise((resolve, reject) => {
  reject("拒绝实现");
});
promse
  .then(
    (res) => {
      console.log(res);
    }
  )
  .catch((err) => {
    // 通过 catch 方法去处理拒绝
    console.log(err);
  });
 */

/* let promse = new Promise((resolve, reject) => {
  reject("拒绝实现");
});
promse
  .then(
    (res) => {
      console.log(res);
    },
    // 这里处理了 error catch 就不会执行了
    (err) => {
      console.log("thenErr", err);
    }
  )
  .catch((err) => {
    console.log("catchErr", err);
  });
 */

/* let promse = new Promise((resolve, reject) => {
  reject("拒绝实现");
});
promse
  .then((res) => {
    // 这里的 then 不处理出去就会继续传递
    console.log(res);
  })
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      // 传递到这里处理错误，所以 then 不处做理，会一直被传递
      console.log("thenErr", err);
    }
  )
  .catch((err) => {
    console.log("catchErr", err);
  }); */

let promse = new Promise((resolve, reject) => {
  // 抛出错误会直接改变 Promise 状态为 reject
  throw new Error("拒绝实现");
});

promse
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      // 这里处理错误后，catch 就无法接收了
      console.log("thenErr", err);
    }
  )
  .catch((err) => {
    console.log(err);
  });
