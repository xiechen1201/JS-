import {
  getTodoService,
  addTodoService,
  toggleTodoService,
  removeTodoService
} from "../../api/todo";

import { ref, watchEffect, watch, computed } from "vue";

export function useTodoList() {
  const todoData = ref([]);
  const type = ref("");
  const todoCount = computed(() => todoData.value.length);

  const getTodo = async () => {
    const data = await getTodoService();

    type.value = "getTodo";
    todoData.value = data;
  };

  const addTodo = async (todoText) => {
    const todo = {
      id: new Date().getTime(),
      content: todoText,
      completed: false
    };
    await addTodoService(todo);

    type.value = "addTodo";
    todoData.value.push(todo);
  };

  const toggleTodo = async (id) => {
    await toggleTodoService(id);

    type.value = "toggleTodo";
    todoData.value = todoData.value.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
  };

  const removeTodo = async (id) => {
    await removeTodoService(id);

    type.value = "removeTodo";
    todoData.value = todoData.value.filter((el) => {
      return el.id !== id;
    });
  };

  watchEffect(getTodo);

  watch(type, (newVal) => {
    console.log(newVal);
  });

  return {
    todoData,
    todoCount,
    addTodo,
    toggleTodo,
    removeTodo
  };
}
