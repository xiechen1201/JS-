import { ref } from "vue";

const states = [];
const stateSetters = [];

let stateIndex = 0;

export default function useState(initialState) {
  states[stateIndex] = createState(initialState, stateIndex);

  if (!stateSetters[stateIndex]) {
    stateSetters.push(createStateSetter(stateIndex));
  }

  const _state = states[stateIndex];
  const _setState = stateSetters[stateIndex];

  return [_state, _setState];
}

function createState(initialValue, stateIndex) {
  const state = ref(initialValue);
  return state[stateIndex] !== undefined ? states[stateIndex] : state;
}

function createStateSetter(stateIndex) {
  return function (newState) {
    if (typeof newState === "function") {
      states[stateIndex].value = newState(states[stateIndex]);
    } else {
      states[stateIndex].value = newState;
    }
  };
}
