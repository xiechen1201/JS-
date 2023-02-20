import { proxyHandler } from "./handler";
import { isObject } from "./utils";

export function createReactive(data) {
  return createReactiveData(data, proxyHandler);
}

function createReactiveData(data, proxyHandler) {
  if (!isObject(data)) return data;

  return new Proxy(data, proxyHandler);
}
