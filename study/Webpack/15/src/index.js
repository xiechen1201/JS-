/* import _ from "lodash";
const res = _.join([1, 2, 3, 4, 5, 6]);
console.log(res); */

const oBtn = document.createElement("button");
oBtn.innerText = "加载 Lodash";
oBtn.onclick = function () {
  import(/* webpackChunkName: "lodash" */ "lodash").then(({ default: _ }) => {
    console.log(_.join(["a", "b", "c"], "--"));
  });
};
document.body.appendChild(oBtn);
