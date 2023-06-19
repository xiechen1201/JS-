import { ref, reactive, toRefs } from "vue";

// 自定义 Composition API
export function useState(initialState) {
  const state = ref(initialState);

  const setState = (newState) => {
    state.value = typeof newState === "function" ? newState(state) : newState;
  };

  return [state, setState];
}

export function useReactive(data) {
  const state = reactive(data);

  for (const key in data) {
    const fn = function (newState) {
      state[key] = typeof newState === "function" ? newState(state) : newState;
    };

    state[`set${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = fn;
  }

  return [state, toRefs(state)];
}
