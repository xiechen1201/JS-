import Vue from "./modules/vue.js";

const vm = new Vue({
  data() {
    return {
      a: 1,
      b: 2
    };
  },
  computed: {
    total() {
      console.log("computed total");
      return this.a + this.b;
    }
  },
  watch: {
    a(newVal, oldVal) {
      console.log("watch a:", newVal, oldVal);
    },
    b(newVal, oldVal) {
      console.log("watch b:", newVal, oldVal);
    },
    total(newVal, oldVal) {
      console.log("watch total:", newVal, oldVal);
    }
  }
});

console.log(vm);

vm.a = 100;

console.log(vm.total);

vm.b = 200;

console.log(vm.total);
