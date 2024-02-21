// import { defineStore } from 'pinia';
import { defineStore } from '../pinia';

const store = defineStore({
  id: 'todolist1',
  state: () => {
    return {
      todoList: []
    };
  },
  getters: {
    count() {
      // this 指向当前创建出来的 store 的，而不是 state！！！
      return this.todoList.length;
    }
  },
  actions: {
    addTodo(todo) {
      this.todoList.unshift(todo);
    },
    toggleTodo(id) {
      this.todoList = this.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    }
  }
});

export default store;
