class Computed {
  constructor() {
    /* 
        把 computed 中的属性按照下面的格式进行存储
        {
            key: totla,
            value: 3,
            get: totalFn,
            dep:[a, b]
        }
    */
    this.computedData = [];
  }

  addComputed(vm, computed, key) {
    const descriptor = Object.getOwnPropertyDescriptor(computed, key);
    const descriptorFn = descriptor.value.get ? descriptor.value.get : descriptor.value;
    const value = descriptorFn.call(vm);
    const get = descriptorFn.bind(vm);
    const dep = this._collectDep(descriptorFn);

    this._addComputedProp({
      key,
      value,
      get,
      dep
    });

    const dataItem = this.computedData.find((el) => el.key === key);
    Object.defineProperty(vm, key, {
      get() {
        return dataItem.value;
      },
      set() {
        dataItem.value = dataItem.get();
      }
    });
  }

  _addComputedProp(computedProp) {
    this.computedData.push(computedProp);
  }

  update(key, watch) {
    this.computedData.map((el) => {
      const dep = el.dep;
      const _key = dep.find((el) => el === key);

      if (_key) {
        const oldValue = el.value;
        el.value = el.get();
        watch(el.key, el.value, oldValue);
      }
    });
  }

  _collectDep(fn) {
    const matched = fn.toString().match(/this\.(.+?)/g);
    return matched.map((el) => el.split(".")[1]);
  }
}

export default Computed;
