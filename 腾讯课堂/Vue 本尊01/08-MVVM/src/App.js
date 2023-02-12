// Vite 会自动补全 /index.js 的后缀
import { useDom, useReactive } from "../mvvm/index";

function App() {
  // 创建响应式
  const state = useReactive({
    count: 0,
    name: "TestName"
  });
  // 操作 state 数据的方法
  const add = function (num) {
    state.count += num;
  };
  const minus = function (num) {
    state.count -= num;
  };
  const changeName = function (name) {
    state.name = name;
  };
  // 模版的渲染
  return {
    template: `
      <h1>{{ count }}</h1>
      <h2>{{ name }}</h2>
      <button onClick="add(2)">新增</button>
      <button onClick="minus(1)">减去</button>
      <button onClick="changeName('xiechen')">更改名字</button>
    `,
    state,
    methods: {
      add,
      minus,
      changeName
    }
  };
}

useDom(
  App(), // 返回 template，state，methods
  document.querySelector("#app")
);
