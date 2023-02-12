var vm = {
  data: {
    a: 1,
    b: 2,
    list: [1, 2, 3, 4, 5]
  }
};

for (const key in vm.data) {
  Object.defineProperty(vm, key, {
    get() {
      console.log("数据获取");
      return vm.data[key];
    },
    set(newVal) {
      console.log("数据设置");
      vm.data[key] = newVal;
    }
  });
}

/* vm.a = 1;
vm.list = [2, 3, 4, 5, 6];
console.log(vm.list); */

// ==========

/* // 没有触发 set 机制
// 当数据变化，确实变化了，视图是不是能不能变化，取决于 set 机制有没有执行
vm.list.push(6); 
console.log(vm.list); */

// ==========

/* 
// Object.defineProperty 没办法监听下列方法对数组的变更
vm.list.pop();
vm.list.push(6);
vm.list.shift();
vm.list.unshift(1);
vm.list.splice(2, 1);
vm.list.sort((a, b) => a - b);
vm.list.reverse(6)
console.log(vm.list);

// 如果都能返回新数组，那就可以重新赋值 vm.list = vm.list.pop();
// 所以 Vue 对以上方法进行了包裹封装，类似重写

function push(){
  vm.list.push(6);
  // updateView
}

// 有些数组的方法会返回新的数组，可以替换原数组，这样就没必要进行上层的封装

vm.list = vm.list.concat(7) 
*/
