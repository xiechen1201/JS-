"use strict";
// 13 一些难点与技巧
let b;
function doSth(v) {
    switch (typeof v) {
        case "number":
            return v.toFixed(2);
        case "string":
            return v.split("");
        case "boolean":
            return v.toString();
        default:
            // 推断为：v: never
            // 因为没有可以分配的类型了，就只能是 never 类型了
            //   b = v;
            throwError("没有可以分配的类型");
            break;
    }
}
function throwError(error) {
    throw new Error(error);
}
