const { createApp } = window.Vue;

/* let app = createApp({
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ yourTitle() }}</h2>
    <button v-on:click="changeTitle('title')">change title</button>
  `,
  data() {
    return {
      title: "This is my title.",
    };
  },
  methods: {
    changeTitle() {
      this.title = "This is your title.";
    },
    yourTitle() {
      return "your title";
    },
  },
});

let vm = app.mount("#app");

console.log(vm) */

// ##

var VueTest = (function () {
  function Vue(options) {
    this.$data = options.data();
    this._methods = options.methods;

    this._init(this);
  }

  Vue.prototype._init = function (vm) {
    initData(vm);
    initMthdos(vm);
  };

  function initData(vm) {
    for (const key in vm.$data) {
      Object.defineProperty(vm, key, {
        get() {
          return vm.$data[key];
        },
        set(newValue) {
          vm.$data[key] = newValue;
        },
      });
    }
  }

  function initMthdos(vm) {
    for (const key in vm._methods) {
      vm[key] = vm._methods[key];
    }
  }

  return Vue;
})();

var vm = new VueTest({
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  methods: {
    increaseA(num) {
      this.a += num;
    },
    increaseB(num) {
      this.b += num;
    },
    getTotal() {
      console.log(this.a + this.b);
    },
  },
});

console.log(vm);

vm.increaseA(1);
vm.increaseA(1);
vm.increaseA(1);
// a4

vm.increaseB(2);
vm.increaseB(2);
vm.increaseB(2);
// b8

vm.getTotal(); // 12
