import proxyData from "./proxy";
import observer from "./observe"

function initState(vm) {
  var options = vm.$options;

  if (options.data) {
    initData(vm);
  }
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};

  for (const key in data) {
    proxyData(vm, "_data", key);
  }

  observer(vm._data)
}

export { initState };
