import observe from "./observe";

function defineReactiveData(data, key, value) {
  // 例如 info.a 还是个对象，那么就递归观察
  observe(value);

  Object.defineProperty(data, key, {
    get() {
      console.log(`⤴️ 响应式获取：data.${key}，`, value);
      return value;
    },
    set(newVal) {
      console.log(`🔁 响应式获取：data.${key}，`, newVal);
      if (newVal === value) {
        return false;
      }
      // 如果新值还是对象，那么接着进行观察
      observe(newVal);
      value = newVal;
    }
  });
}

export default defineReactiveData;
