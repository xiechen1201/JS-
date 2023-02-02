// 同步写法
// import _ from "lodash";

// const res = _.join([1, 2, 3, 4, 5, 6]);
// console.log(res);

// 异步写法
function getComponent() {
  return import("lodash").then(({ default: _ }) => {
    console.log(_.join(["a", "b", "c"], "--"));
  });
}
getComponent();
