const { ref, reactive, toRefs } = Vue;

// 自定义composition API    hook
export function useState(initialState) {
  const state = ref(initialState);
  
  // setState((state) => state + 1)
  const setState = (newState) => {
    state.value = typeof newState === 'function' ? newState(state) : newState;
  }

  return [
    state,
    setState
  ]
}

export function useReactive (data) {
  const state = reactive(data);

  // state -> name | setName
  //       -> age  | setAge

  for (let key in data) {
    state[`set${ key.slice(0, 1).toUpperCase() }${ key.slice(1) }`] = function (newState) {
      state[key] = typeof newState === 'function' ? newState(state) : newState;
    }
  }

  return [
    state,
    toRefs(state)
  ]
}

/**
 * state.name -> 'Xiaoyesensen'  不可变的值
 * ref -> title -> template title -> title.value -> 
 *        setup -> title.value -> get value -> deps []
 *        ref {}
 * 
 * state -> { name: '小野森森' }   ...state -> Xiaoyesensen
 * 
 *       -> toRef -> Xiaoyesensen -> { value : Xiaoyesensen } -> name
 * 
 * 
 * 
 */