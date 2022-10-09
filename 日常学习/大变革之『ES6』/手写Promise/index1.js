class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFullFilledCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      this.state = "fullFilled";
      this.value = value;
      this.onFullFilledCallbacks.forEach((el) => el());
    };

    let reject = (reason) => {
      this.state = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach((el) => el());
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // then 方法
  then(onFullFilled, onRejected) {
    onFullFilled = this.isFunction(onFullFilled)
      ? onFullFilled
      : (data) => data;
    onRejected = this.isFunction(onRejected) ? onRejected : (err) => err;

    const p2 = new MyPromise((resolve, reject) => {
      let x;

      if (this.state === "fullFilled") {
        setTimeout(() => {
          try {
            x = onFullFilled(this.value);
            this.resolvePromise(p2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            x = onRejected(this.reason);
            this.resolvePromise(p2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "pending") {
        this.onFullFilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              x = onFullFilled(this.value);
              this.resolvePromise(p2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              x = onRejected(this.reason);
              this.resolvePromise(p2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return p2;
  }
  
  // 如果 .then 方法传递的是一个 Promise 对象就用这个方法处理
  resolvePromise(p2, x, resolve, reject) {
    let callen = undefined;

    if (p2 === x) {
      return reject(new Error("typeErr"));
    }
    if ((typeof x === "object" && x !== null) || typeof x === "function") {
      try {
        let then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            (y) => {
              if (callen) return;
              callen = true;
              this.resolvePromise(p2, y, resolve, reject);
            },
            (r) => {
              if (callen) return;
              callen = true;
              reject(r);
            }
          );
        } else {
          if (callen) return;
          callen = true;
          resolve(x);
        }
      } catch (error) {
        if (callen) return;
        callen = true;
        reject(error);
      }
    } else {
      resolve(x);
    }
  }

  // 是否是函数
  isFunction(value) {
    return typeof value === "function";
  }

}

// 1、executor 执行的流程=》同步的情况，异步的情况
// 2、链式操作，怎么做到链式操作 .then=> 返回一个新的 promise
// 3. 怎么拿值，链式操作的返回值
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const p2 = p1.then(
  (res) => {
    return new MyPromise((resolve, reject) => {
      resolve(10);
    });
  },
  (err) => {
    console.log(err);
  }
);
p2.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
