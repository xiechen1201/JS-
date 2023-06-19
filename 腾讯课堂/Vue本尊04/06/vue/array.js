import { ARR_METHODS } from "./config";
import observeArr from "./observeArr";

var originArrayMethods = Array.prototype;
var arrMethods = Object.create(originArrayMethods);

ARR_METHODS.forEach(function (m) {
  // 在新对象上重写每一个数组的方法
  arrMethods[m] = function () {
    var args = Array.prototype.slice.call(arguments);
    // 执行数组原本的方法
    var rt = originArrayMethods[m].apply(this, args);

    var newArr;
    switch (m) {
      case "push":
      case "unshift":
        // 例如 arr.push({a: 1})
        // args 就是 [{a: 1}]
        newArr = args;
        break;
      case "splice":
        // 例如 arr.splice(1, 0, {a: 1}, {b: 2})
        // args 就是 [{a: 1}, {b: 2}]
        newArr = args.slice(2);
        break;
      default:
        break;
    }

    newArr && observeArr(newArr);

    return rt;
  };
});

export { arrMethods };
