import { createReactive } from "./reactive";
import { isObject } from "./utils";

function createGetter() {
  return function (target, key, reactive) {
    const res = Reflect.get(target, key, reactive);

    if (isObject(res)) {
      return createReactive(res);
    }

    return res;
  };
}

function createSetter() {
  return function (target, key, value, reactive) {
    return Reflect.set(target, key, value, reactive);
  };
}

const get = createGetter();
const set = createSetter();

export const proxyHandler = {
  get,
  set
};
