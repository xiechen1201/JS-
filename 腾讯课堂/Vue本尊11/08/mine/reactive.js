import Dep from "./Dep.js";

const dep = new Dep();

export function reactive(data) {
  return new Proxy(data, {
    get(target, key) {
      const value = Reflect.get(target, key);
      const isObject = value !== null && typeof value === "object";

      dep.collect(target, key);

      return isObject ? reactive(value) : value;
    },
    set(target, key, value) {
      let oldValue = target[key];
      let res = Reflect.set(target, key, value);

      dep.notify(target, key, value, oldValue);

      return res;
    }
  });
}
