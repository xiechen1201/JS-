import defineReactiveData from "./reactive";
import { arrMethods } from "./array";
import observeArr from "./observeArr";

function Observer(data) {
  if (Array.isArray(data)) {
    // 处理数组
    data._proto__ = arrMethods;
    observeArr(data)
  } else {
    // 处理对象
    this.walk(data);
  }
}

Observer.prototype.walk = function (data) {
  let keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = data[key];

    // 拦截 data 数据
    defineReactiveData(data, key, value);
  }
};

export default Observer;
