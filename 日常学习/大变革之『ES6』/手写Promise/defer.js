// 验证
// npm 安装：promises-aplus-tests
// promises-aplus-tests index.js
MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });

  return dfd;
};

module.exports = MyPromise;