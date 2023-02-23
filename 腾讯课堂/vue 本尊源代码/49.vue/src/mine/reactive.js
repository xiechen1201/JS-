import Dep from "./Dep";

const dep = new Dep();

console.log(dep.effectMap);

export function reactive (data) {
  /**
   * Object.defineProperty -> 一个对象设置属性  for in 
   * Proxy是内部代理所有属性
   */
  return new Proxy(data, {
    get (target, key) {
      const value = Reflect.get(target, key);
      dep.collect(target, key);
      return value !== null && typeof value === 'object' ? reactive(value) : value;
    },
    set (target, key, value) {
      const oldValue = target[key];
      const res = Reflect.set(target, key, value);
      dep.notify(target, key, value, oldValue);
      return res;
    }
  })
}