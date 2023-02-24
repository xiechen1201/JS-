/**
 * * refs: {
 *   title: {
 *     deps: [ h1, h1 ]
 *     _defaultValue: initialValue
 *     _value: initialValue (mutable value)
 *     value: -> set -> update -> 劫持 -> setter  getter
 *     $reset () => _value = _defaultValue -> update
 *   }
 * 
 * }
 * 
 */

import {
  update
} from './render';

export default class Ref {
  constructor (initialValue) {
    this.deps = new Set();
    this._defaultValue = initialValue; // 不可变的
    this._value = initialValue; // 可变
  }

  get value () {
    return this._value;
  }

  set value (newValue) {
    this._value = newValue;
    update(this);
  }

  $reset () {
    this.value = this._defaultValue;
  }
}