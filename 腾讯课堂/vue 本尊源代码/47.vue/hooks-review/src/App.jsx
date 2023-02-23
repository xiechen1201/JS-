import { useState, useReducer } from 'react';

function App() {

  const initialState = { count: 0 };

  function countReducer (state, { type, payload }) {
    switch (type) {
      case 'PLUS':
        return { count: state.count += payload }
      case 'MINUS':
        return { count: state.count -= payload };
      default:
        break;
    }
  }
  
  // const [ count, setCount ] = useState(0);
  const [ state, countDispatch ] = useReducer(countReducer, initialState);

  return (
    <div className="App">
      <h1>{ state.count }</h1>
      <button onClick={ () => countDispatch({
        type: 'PLUS',
        payload: 2
      }) }>PLUS</button>
      <button onClick={ () => countDispatch({
        type: 'MINUS',
        payload: 1
      }) }>MINUS</button>
    </div>
  )
}

export default App;
