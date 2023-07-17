import { forEachValueKey } from "./utils";
import { computed } from "vue";

export function createMutations(store, mutations) {
  forEachValueKey(mutations, (mutationFN, mutationKEY) => {
    console.log(mutationFN,mutationKEY)
    store._mutations[mutationKEY] = (payload) => {
      mutationFN.apply(store, [store.state, payload]);
    };
  });
}

export function createActions(store, actions) {
  forEachValueKey(actions, (actionsFN, actionsKEY) => {
    store._actions[actionsKEY] = (payload) => {
      actionsFN.apply(store, [store, payload]);
    };
  });
}

export function createGetters(store, getters) {
  store.getters = {};

  forEachValueKey(getters, (getterFN, getterKEY) => {
    const getterFnComputed = computed(() =>
      getterFN(store.state, store.getters)
    );

    Object.defineProperty(store.getters, getterKEY, {
      get() {
        return getterFnComputed.value;
      }
    });
  });
}

export function createCommitFn(store, commit) {
  store.commit = function (type, payload) {
    commit.apply(store, [type, payload]);
  };
}

export function createDispatchFn(store, dispatch) {
  store.dispatch = function (type, payload) {
    dispatch.apply(store, [type, payload]);
  };
}
