import ComputedRef from './ComputedRef';
import Dep from './Dep';

export function watch (depFn, callback) {
  Dep.effectCB = callback;
  depFn();
  Dep.effectCB = null;
}

export function watchEffect (callback) {
  // callback() -> state.a getter函数 -> collect() -> state.a: Set [effectCB]
  Dep.effectCB = callback;
  callback();
  Dep.effectCB = null;
}

export function computed (callback) {  // { _value: value, get value, set value }
  // get a -> callback
  // get b -> callback
  Dep.effectCB = callback;
  const value = callback();
  const computedRef = new ComputedRef(value); //

  Object.defineProperty(callback, 'computedRef', {
    value: computedRef
  })
  /**
   * notify -> callback() -> value -> computedRef.value
   * 
   */
  Dep.effectCB = null;
  
  return computedRef;
}