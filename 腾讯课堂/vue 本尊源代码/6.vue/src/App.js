/**
 * MVC -> 驱动被MVC分离成三部分
 * 跟我们普通M V的逻辑混合在一起了
 * 
 * MVVM -> 驱动VM -> ViewModel 
 * M -> Model 数据保存和处理的层
 * V -> 视图
 */

import { useDOM, useReactive } from '../MVVM';

function App () {
  
  const state = useReactive({
    count: 0,
    name: 'Xiaoyesensen'
  });

  const add = (num) => {
    state.count += num;
  }

  const minus = (num) => {
    state.count -= num;
  }

  const changeName = (name) => {
    state.name = name;
  }

  return {
    template: `
      <h1>{{ count }}</h1>
      <h2>{{ name }}</h2>
      <button onClick="add(2)">+</button>
      <button onClick="minus(1)">-</button>
      <button onClick="changeName('小野森森')">Change Name</button>
    `,
    state,
    methods: {
      add,
      minus,
      changeName
    }
  }
}

useDOM(
  App(), // template, state, methods
  document.querySelector('#app')
)