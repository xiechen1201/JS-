const { createApp } = window.Vue;

/* const app = Vue.createApp({
  template: `
      <h1>{{ title }}</h1>
    `,
  data() {
    return {
      title: "this is title",
    };
  },
});
const vm = app.mount("#app"); */

/* const MyComponent = {
  template: `
      <h1>{{ a }}</h1>
    `,
  // data 必须是一个函数
  data() {
    return {
      a: 1,
    };
  },
};
createApp(MyComponent).mount("#app"); */

// ## 数据拦截

/* 
function VueTest(options) {
  this.$data = options.data();
  var _this = this;

  // this.a = this.$data.a
  // this.b = this.$data.b

  for (const key in this.$data) {
    (function (k) {
      // 独立作用域，key 当前作用域下的临时的局部变量
      Object.defineProperty(_this, k, {
        get: function () {
          return _this.$data[k];
        },
        set: function (newValue) {
          _this.$data[k] = newValue;
        },
      });
    })(key);
  }
}

var vm = new VueTest({
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
});

console.log(vm.a);
vm.b = 3;
console.log(vm); */

// ## 如果 data 是一个对象

function VueTest(options) {
  this.$data = options.data;
  var _this = this;

  for (const key in this.$data) {
    (function (k) {
      Object.defineProperty(_this, k, {
        get: function () {
          return _this.$data[k];
        },
        set: function (newValue) {
          _this.$data[k] = newValue;
        },
      });
    })(key);
  }
}

var data = {
  a: 1,
  b: 2,
};

var vm1 = new VueTest({
  data: data,
});
var vm2 = new VueTest({
  data: data,
});

vm1.b = 3;
console.log("vm1", vm1);
console.log("vm2", vm2);

// 这就导致了两个实例对象，数据会被同步更改
