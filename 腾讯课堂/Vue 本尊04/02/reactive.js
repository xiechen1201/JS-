import {attrUpdate} from "./update.js"

export function reactive(vm, target) {
  for (const key in target) {
    Object.defineProperty(vm, key, {
      get() {
        return target[key];
      },
      set(newVal) {
        if (target[key] === newVal) {
          return false;
        }
        target[key] = newVal;
        attrUpdate(vm, key)
      }
    });
  }
}
