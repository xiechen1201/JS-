import { createReactive } from "../../xiaoye";

const template = `
    <ul class="list">
        <h1>{{ title }}</h1>
        {{ dateTime }}
        <for data="list" tag="li" class="item">
            <span>name：{ name }</span>    
            <span>age：{ age }</span>    
        </for>
    </ul>`;

function TestA() {
  const state = createReactive({
    title: "老师信息列表",
    dateTime: "2021-02-03 10:23",
    list: [
      {
        id: 1,
        name: "小明",
        age: "26"
      },
      {
        id: 2,
        name: "小红",
        age: "28"
      },
      {
        id: 3,
        name: "小李",
        age: "30"
      }
    ]
  });

  return [template, state];
}

export default TestA;
