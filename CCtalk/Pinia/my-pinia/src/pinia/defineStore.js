import { computed, effectScope, inject, isReactive, isRef, reactive } from 'vue';
import { piniaSymbol } from './global';
import { getArgs, isFuntion, isComputed } from './utils';

export default function defineStore(...args) {
  const { id, options, setup } = getArgs(args);

  const isSetup = isFuntion(setup);

  /**
   * 1、创建 store
   * 2、pinia 导入
   * 3、判断 pinia 的 store 是不是存在当前 id
   *    没有=》创建 store
   *    有=》返回 store
   */
  function useStore() {
    const pinia = inject(piniaSymbol);

    if (!pinia.store.has(id)) {
      if (isSetup) {
        createSetupStore(pinia, id, setup);
      } else {
        createOptionStore(pinia, id, options);
      }
    }

    return pinia.store.get(id);
  }

  return useStore;
}

/**
 * pinia.store.id ==> store
 */
function createSetupStore(pinia, id, setup) {
  const setupStore = setup();
  const store = reactive({});
  let storeScope;

  const result = pinia.scope.run(() => {
    storeScope = effectScope();
    return storeScope.run(() => complieSetup(pinia, id, setupStore));
  });

  return setStore(pinia, id, store, result);
}

function complieSetup(pinia, id, setupStore) {
  !pinia.state.value[id] && (pinia.state.value[id] = {});

  for (const key in setupStore) {
    const el = setupStore[key];

    if ((isRef(el) && !isComputed(el)) || isReactive(el)) {
      /**
       * pinia {
       *  stats: {
       *      "todolist1": {
       *          todoList: []
       *      }
       *  }
       * }
       *
       */
      pinia.state.value[id][key] = el;
    }
  }

  return {
    ...setupStore
  };
}

function createOptionStore(pinia, id, options) {
  const { state, getters, actions } = options;
  const store = reactive({});
  let storeScope;

  const result = pinia.scope.run(() => {
    storeScope = effectScope();

    return storeScope.run(() =>
      complieOptions(pinia, id, store, { state, getters, actions })
    );
  });

  return setStore(pinia, id, store, result);
}

function complieOptions(pinia, id, store, { state, getters, actions }) {
  const storeState = createStoreState(pinia, id, state);
  const storeGetters = createStoreGetters(store, getters);
  const storeActions = createStoreActions(store, actions);

  return {
    ...storeState,
    ...storeGetters,
    ...storeActions
  };
}

function setStore(pinia, id, store, result) {
  pinia.store.set(id, store);
  Object.assign(store, result);
  return store;
}

function createStoreState(pinia, id, state) {
  return (pinia.state.value[id] = state ? state() : {});
}

function createStoreGetters(store, getters) {
  return Object.keys(getters || {}).reduce((wrapper, getterName) => {
    wrapper[getterName] = computed(() => getters[getterName].call(store));

    return wrapper;
  }, {});
}

function createStoreActions(store, actions) {
  return Object.keys(actions || {}).reduce((wrapper, actionName) => {
    wrapper[actionName] = function () {
      actions[actionName].apply(store, arguments);
    };

    return wrapper;
  }, {});
}
