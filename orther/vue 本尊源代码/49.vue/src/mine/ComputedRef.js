export default class ComputedRef {
  constructor (value) { // 默认值 value
    this._value = value;
  }

  get value () {
    return this._value;
  }

  set value (newValue) {
    this._value = newValue;
  }
}