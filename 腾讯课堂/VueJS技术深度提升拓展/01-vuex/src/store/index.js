import { createStore } from "vuex";
import user from "./modules/user";

// 创建 vuex 仓库
const store = createStore({
  modules: {
    user
  },
  state: {
    todos: [],
    filter: "all", // all finished unfinish
    id: 0
  },
  getters: {
    /* 
    getters 的参数：
        state
        getters 为了调用其他的 getters    
    */
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinish(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    filterTodos(state, getters) {
      switch (state.filter) {
        case "finished":
          return getters.finishedTodos;
        case "unfinish":
          return getters.unfinish;
        default:
          return state.todos;
      }
    }
  },
  actions: {
    /* 
    actions 方法的参数： 
        store{ commit,dispatch } store 对象
        payload 参数
    */
    addTodo({ commit }, text) {
      // 方法类型，参数
      commit("addTodo", text);
    },
    toggleTodo({ commit }, id) {
      commit("toggleTodo", id);
    },
    removeTodo({ commit }, id) {
      commit("removeTodo", id);
    }
  },
  mutations: {
    /* 
    mutations 方法的参数：
        state
        参数
    */
    addTodo(state, text) {
      state.todos.push({
        id: state.id++,
        text: text,
        isFinished: false
      });
    },
    toggleTodo(state, id) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isFinished = !todo.isFinished;
        }
        return todo;
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    setFilter(state, filter) {
      state.filter = filter;
    }
  }
});

export default store;
