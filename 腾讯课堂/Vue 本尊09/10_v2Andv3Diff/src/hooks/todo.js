import { ref } from "vue";

import { todoTypes } from "../types/index";

const todoList = ref([]);

const setTodoList = (type, args) => {
  switch (type) {
    case todoTypes.ADD_TODO:
      todoList.value.push(args);
      break;
    case todoTypes.TOGGLE_TODO:
      todoList.value = todoList.value.map((el) => {
        if (el.id === args) {
          el.completed = !el.completed;
        }
        return el;
      });
      break;
    case todoTypes.REMOVE_TODO:
      todoList.value = todoList.value.filter((el) => el.id !== args);
      break;
  }
};

export default function () {
  return [todoList, setTodoList];
}
