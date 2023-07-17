import { inject, reactive } from "vue";
import {
  createMutations,
  createActions,
  createGetters,
  createCommitFn,
  createDispatchFn
} from "./creators";

class Store {
  constructor(options) {
    const { state, getters, actions, mutations } = options;
    const store = this;
    const { commit, dispatch } = store;

    store._state = reactive({ data: state });
    store._mutations = Object.create(null);
    store._actions = Object.create(null);

    createMutations(store, mutations);
    createActions(store, actions);
    createGetters(store, getters);
    createCommitFn(store, commit);
    createDispatchFn(store, dispatch);
  }

  get state() {
    // 响应式数据
    return this._state.data;
  }

  // store.commit("addTodo", 123)
  commit(type, payload) {
    this._mutations[type](payload);
  }

  dispatch(type, payload) {
    this._actions[type](payload);
  }

  install(app) {
    app.provide("store", this);
    app.config.globalProperties.$store = this;
  }
}

/* 
    创建 store => use(store)
    返回 install 方法
    return {
        install(app) {},
        dispatch,
        commit,
        state,
        getter
    };
*/
export function createStore(options) {
  // 实例化一个 Store 类
  return new Store(options);
}

export function useStore() {
  return inject("store");
}
