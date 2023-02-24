<template lang="">
  <div>
    <div>
      <h1>{{ count1 }}</h1>
      <button @click="setCount1(count => count.value + 2)">+</button>
      <button @click="setCount1(count1 - 1)">-</button>
    </div>
    <div>
      <h1>{{ count2 }}</h1>
      <button @click="setCount2(count => count.value + 2)">+</button>
      <button @click="setCount2(count2 - 1)">-</button>
    </div>
    <div>
      <h1>{{ count3 }}</h1>
      <button @click="count3Dispatch({ type: 'PLUS', payload: 2 })">+</button>
      <button @click="count3Dispatch({ type: 'MINUS', payload: 1 })">-</button>
    </div>
    <div>
      <h1>{{ name }}</h1>
      <h2>{{ age }}</h2>
      <button @click="setInfo('age', (age) => 18)">SET AGE</button>
      <button @click="setInfo({
        name: 'Xy',
        age: 20
      })">SET</button>
    </div>
  </div>
</template>
<script>

import {
  useState,
  useReducer,
  useReactive
} from './vue-hooks';

export default {
  setup () {
    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(100);
    const [ count3, count3Dispatch ] = useReducer((count, setCount, { type, payload }) => {
      switch (type) {
        case 'PLUS':
          setCount(count.value += payload);
          break;
        case 'MINUS':
          setCount(count.value -= payload);
          break;
        default:
          break;
      }
    }, 100);

    // const count = ref(0);

    // const plus = () => {
    //   count.value ++;
    // }

    // const minus = () => {
    //   count.value --;
    // }

    const [ info, infoRefs, setInfo ] = useReactive({
      name: '小红',
      age: 1
    })

    return {
      count1,
      setCount1,
      count2,
      setCount2,
      count3,
      count3Dispatch,
      ...infoRefs,
      setInfo
    }
  }
}
</script>
<style lang="">
  
</style>