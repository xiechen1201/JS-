import useState from './useState';

export default function useReducer (reducer, initialState) {
  const [ state, setState ] = useState(initialState);

  const dispatch = (action) => {
    reducer(state, setState, action);
  }

  return [
    state,
    dispatch
  ]
}