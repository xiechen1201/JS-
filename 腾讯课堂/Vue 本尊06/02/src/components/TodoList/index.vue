<template>
  <div>
    <todo-header @add-todo="onAddTodo"></todo-header>
    <todos
      :data="todoList"
      @toggle-completed="onToggleCompleted"
      @remove-todo="onRemoveTodo"></todos>
    <todo-footer @removeAll="onRemoveAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "../TodoHeader/index.vue";
import Todos from "../Todos/index.vue";
import TodoFooter from "../TodoFooter/index.vue";

export default {
  name: "TodoList",
  components: {
    TodoHeader,
    Todos,
    TodoFooter
  },
  /* provide: {
    // 不能使用 this
    // 想要使用 this，必须使用函数
    // 因为如果数据是可变，数据引用变化就会导致 provide 数据也进行变化，这样会影响子组件的依赖
    placeholder: this.placeholder
  }, */
  provide() {
    return {
      placeholder: this.placeholder
      // todoLen: Vue.computed(() => this.todoList.length)
      // TodoListIns: this
    };
  },
  data() {
    return {
      todoList: [],
      placeholder: "请输入内容"
    };
  },
  methods: {
    onAddTodo(todo) {
      this.todoList.push(todo);
      console.log(this.todoList);
    },
    onToggleCompleted(id) {
      this.todoList.map((el) => {
        if (id === el.id) {
          el.completed = !el.completed;
        }
      });
    },
    onRemoveTodo(id) {
      this.todoList = this.todoList.filter((el) => el.id !== id);
    },
    onRemoveAll() {
      this.todoList = [];
    }
  },
  mounted() {
    setTimeout(() => {
      // 更改后子组件不会响应式
      // 如何解决？
      // 可以使用 Vue3的 compositionAPI 来解决
      // 如果是 Vue2 ，可以传递整个实例组件过去（这种方式非常的不推荐！！！）
      this.placeholder = "Please input something!!";
    }, 1000);
  }
};
</script>

<style></style>
