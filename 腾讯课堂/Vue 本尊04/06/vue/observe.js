import Observer from "./observer"

function observe(data) {
  // 判断只处理对象
  if (typeof data !== "object" || data === null) {
    return false;
  }
  // 观察数据
  return new Observer(data)
}

export default observe;
