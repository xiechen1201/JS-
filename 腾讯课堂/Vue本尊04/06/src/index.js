import Vue from "vue";

let vm = new Vue({
  el: "#app",
  data() {
    return {
      title: "学生列表",
      classNum: 1,
      teacher: ["张三", "李四"],
      info: {
        a: {
          b: 1
        }
      },
      students: [
        {
          id: 1,
          name: "小红"
        },
        {
          id: 2,
          name: "小明"
        }
      ]
    };
  }
});

console.log(vm.students.push(1))

/* console.log(vm);
console.log(vm.title);
console.log(vm.teacher);
console.log(vm.info.a); */


