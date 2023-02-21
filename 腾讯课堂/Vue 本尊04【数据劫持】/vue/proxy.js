function proxyData(vm, target, key) {
  // 当访问 vm.title 的时候转换为 vm._data.title
  Object.defineProperty(vm, key, {
    get: function () {
      return vm[target][key];
    },
    set: function (newVal) {
      vm[target][key] = newVal;
    }
  });
}

export default proxyData;
