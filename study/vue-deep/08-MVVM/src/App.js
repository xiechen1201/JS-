import { useDom, useReactive } from "../mvvm/index";

// 执行后能创建一个应用实例
function App() {
  const state = useReactive({
    count: 0,
    name: "TestName",
  });

  const add = function (num) {
    state.count += num;
  };
  const minus = function (num) {
    state.count -= num;
  };
  const changeName = function (name) {
    state.name = name;
  };

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
      changeName,
    },
  };
}

useDom(
  App(), // 返回 template，state，methods
  document.querySelector("#app")
);
