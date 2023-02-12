import { useReactive } from "./index";
/**
 * isObject 用于判断数据是不是一个对象
 * hasOwnProperty 用于判断一个属性是不是对象本身上的属性，而非原型上的属性
 * isEqual 用于判断新值和旧值是否相等
 */
import { isObject, hasOwnProperty, isEqual } from "../shared/utils";
import { update } from "../render";
import { statePool } from "../compiler/state";

function createGetter() {
  return function get(target, key, receiver) {

    // 通过 Reflect.get 方法去操作属性
    // 详见MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get
    const res = Reflect.get(target, key, receiver);

    // 如果返回的值是一个对象，那么就继续调用 useReactive 去处理
    if (isObject(res)) {
      return useReactive(res);
    }

    // 否则直接返回
    return res;
  };
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const isKeyExist = hasOwnProperty(target, key);
    const oldValue = target[key];
    // 同 Reflect.get ，但是 set 返回的是是否设置成功的布尔值
    const res = Reflect.set(target, key, value, receiver);

    // 如果对象上没有这个属性，那么这个属性就是新增的属性
    if (!isKeyExist) {
      console.log("响应式新增：", value);
    } else if (!isEqual(value, oldValue)) {
      // 否则就是去更改属性的值
      console.log("响应式修改：", key, value);
      // 然后调用视图的 update 方法
      update(statePool, key, value);
    }

    return res;
  };
}

const get = createGetter();
const set = createSetter();

export const mutableHandler = {
  get,
  set,
};
