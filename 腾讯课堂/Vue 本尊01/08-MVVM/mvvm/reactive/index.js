import { isObject } from "../shared/utils";
import { mutableHandler } from "./mutableHandler";

export function useReactive(target) {
  // target 为 App.js 中的 state , 也就是
  /* 
    {
      count: 0,
      name: "TestName"
    }
  */
  // mutableHandler 为 Proxy 对象拦截属性的一些方法
  return createReactObject(target, mutableHandler);
}

function createReactObject(target, baseHandler) {
  if (!isObject(target)) {
    return target;
  }
  return new Proxy(target, baseHandler);
}
