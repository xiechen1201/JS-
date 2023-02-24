const { ref } = Vue;

// const states = [{value}];
// const stateSetters = [];

// let stateIndex = 0;

/**
 * count 普通值 0 原始值 setCount
 * [ count, setCount ]
 * 
 * view count => 0
 * 
 * 
 */

export default function useState (initialState) {
  // states[stateIndex] = createState(initialState, stateIndex);

  // if (!stateSetters[stateIndex]) {
  //   stateSetters.push(createStateSetter(stateIndex));
  // }

  // const _state = states[stateIndex];
  // const _setState = stateSetters[stateIndex];

  // stateIndex ++;

  const _state = createState(initialState);
  const _setState = createStateSetter(_state);

  return [
    _state,
    _setState
  ]
}

function createState (initialState, stateIndex) {
  // const state = ref(initialState);
  // return states[stateIndex] !== undefined ? states[stateIndex] : state;

  return ref(initialState);
}

// function createStateSetter (stateIndex) {
//   return function (newState) {
//     if (typeof newState === 'function') {
//       states[stateIndex].value = newState(states[stateIndex]);
//     } else {
//       states[stateIndex].value = newState;
//     }
//   }
// }

function createStateSetter (state) {
  return function (newState) {
    if (typeof newState === 'function') {
      state.value = newState(state);
    } else {
      state.value = newState;
    }
  }
}