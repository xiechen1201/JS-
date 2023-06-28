import Dep from "./Dep.js";
import ComputedRef from "./ComputedRef.js";

export function watch(depFn, callback) {
  Dep.effectCB = callback;
  depFn();
  Dep.effectCB = null;
}

export function watchEffect(callback) {
  // callback() => state.a ==> getter ==> collect() ==> state.a
  Dep.effectCB = callback;
  callback();
  Dep.effectCB = null;
}

export function computed(callback) {
  Dep.effectCB = callback;
  const value = callback();
  const computedRef = new ComputedRef(value);

  // callback.computedRef = computedRef;
  Object.defineProperty(callback, "computedRef", {
    value: computedRef
  });

  Dep.effectCB = null;

  return computedRef;
}
