import Vue from "./index.js";

var vm = new Vue({
  el: "#app",
  template: `
    <span>{{ a }}</span>
    <span>+</span>
    <span>{{ b }}</span>
    <span>=</span>
    <span>{{ total }}</span>
    `,
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
  }
});

console.log(vm);
console.log(vm.total);
console.log(vm.total);
console.log(vm.total);
console.log(vm.total);

vm.a = 100;
vm.b = 200;

console.log(vm.total);
console.log(vm.total);
console.log(vm.total);
console.log(vm.total);