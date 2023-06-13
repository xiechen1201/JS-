/* const data = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3, 4, 5]
};

observe(data);

function observe(data) {
  for (const key in data) {
    defineReactive(data, key, data[key]);
  }
}

function defineReactive(data, key, value) {
  if ({}.toString.call(value) === "[object Object]") {
    observe(value);
  }

  Object.defineProperty(data, key, {
    get() {
      console.log("GET", key);
      return value;
    },
    set(newVal) {
      console.log("SET", key);
      //   update();
      value = newVal;
    }
  });
}

const arrayMethods = ["push"];

// Array.prototype.push = function (value) {
//   this.push(value);
//   update();
// };

data.a = "789";
data.d = [7, 8, 9];
data.d.push(6);
 */

const data = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3, 4, 5]
};

function reactive(data) {
  // Proxy 的好处：
  // 不用逐个属性的定义 getter/setter 函数
  // Proxy 的实例对象是针对原对象的一个代理对象
  // 可以监听到数组方法的操作
  return new Proxy(data, {
    get(target, key) {
      console.log("get", key);

      const value = Reflect.get(target, key);
      return typeof value === "object" ? reactive(value) : value;
    },
    set(target, key, newVal) {
      console.log("set", key);
      // update()

      // 为什么不用 target[key] = newVal?
      // 所有的程序脱离语义化都是败笔，一会 obj.xxx 一会 obj.xx=xx 太乱
      return Reflect.set(target, key, newVal);
    }
  });
}

const $data = reactive(data);
// console.log($data);
$data.b.c = 100;
$data.d.push(6);

