import { update } from "./render.js";

export default class Ref {
  constructor(initialValue) {
    this.deps = new Set();
    this._defaultValue = initialValue; // 不可变的
    this._value = initialValue; // 可变的
  }

  /* 
    为什么不能直接使用 _value ?
    因为我要触发劫持，如果直接操作就无法触发劫持了
  */
  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    update(this);
  }

  $reset() {
    // this.value  =this._defaultValue ??
    this._value = this._defaultValue;
    update(this);
  }
}
