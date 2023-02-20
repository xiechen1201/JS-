import TodoList from "./TodoList.js";

const { createApp } = window.Vue;

// const app = {
//   template: ``,
//   components: {
//     TodoList
//   },
//   data() {
//     return {
//       count: 0
//     };
//   },
//   methods: {}
// };

createApp(TodoList).mount("#app");
