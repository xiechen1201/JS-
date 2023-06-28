import { httpGET, httpPOST } from "../libs/http";

export function getTodoService() {
  return httpGET("/get_todo");
}

export function addTodoService(todo) {
  return httpPOST("/add_todo", { todo });
}

export function toggleTodoService(id) {
  return httpPOST("/toggle_todo", { id });
}

export function removeTodoService(id) {
  return httpPOST("/remove_todo", { id });
}
