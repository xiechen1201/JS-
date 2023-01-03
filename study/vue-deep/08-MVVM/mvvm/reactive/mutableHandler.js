import { useReactive } from "./index";
import { isObject, hasOwnProperty, isEqual } from "../shared/utils";
import { update } from "../render";
import { statePool } from "../compiler/state";

function createGetter() {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);

    // console.log("响应式获取：", target[key]);

    if (isObject(res)) {
      return useReactive(res);
    }

    return res;
  };
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const isKeyExist = hasOwnProperty(target, key);
    const oldValue = target[key];
    const res = Reflect.set(target, key, value, receiver);

    if (!isKeyExist) {
      console.log("响应式新增：", value);
    } else if (!isEqual(value, oldValue)) {
      console.log("响应式修改：", key, value);
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
