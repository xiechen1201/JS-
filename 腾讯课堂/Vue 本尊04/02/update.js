import { compileAttr } from "./compile.js";

export function attrUpdate(vm, key) {
  const _stylePool = vm.$stylePool;

  for (const [k, v] of _stylePool) {
    if (v.exprression.indexOf(key) !== -1) {
      compileAttr(vm, k, v.type, v.exprression);
    }
  }
}
