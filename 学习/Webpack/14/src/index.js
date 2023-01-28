// import _ from "lodash";

// const res = _.join([1, 2, 3, 4, 5, 6]);
// console.log(res);

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ "lodash").then(
    ({ default: _ }) => {
      console.log(_.join(["a", "b", "c"], "--"));
    }
  );
}
getComponent();
