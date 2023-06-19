/**
 * bindEvent 用于给元素绑定事件
 *
 */
import { bindEvent } from "./compiler/event";
import { eventFormat, stateFormat } from "./index";

export function useDom({ template, state, methods }, rootDom) {
  // 接收 App.js 方法返回的对象，也就是
  /* 
    {
      template: xxx
      state: xxx
      methods: xxx
    }
  */

  // 调用 render 方法，对模版数据进行处理
  rootDom.innerHTML = render(template, state);
  // 调用 bindEvent 方法进行绑定事件
  bindEvent(methods);
}

export function render(template, state) {
  /* 
    eventFormat 方法会给绑定事件的模版新增一个属性 data-mark="xxx"，例如模版

    <button onClick="add(2)">新增</button> =>>
    <button data-mark="12345" onClick="add(2)">新增</button>

    并且保存到一个名为 eventPool 的数组中，数据结构如下：
    [
      {
        mark: 12345 // dom 标签上的 data-mark 
        handler: add(2)
        type: click
      }
    ]
  */
  template = eventFormat(template);

  /* 
    stateFormat 方法会给标签新增一个属性 data-mark="xxx"，例如模版
    <h1>{{ count }}</h1> =>> 
    <h1 data-mark="12345">1</h1>

    并且保存到一个名为 statePool 的数组中，数据结构如下：
    [
      {
         mark: 12345,
         state: ["count"]
       }
    ]
  */
  template = stateFormat(template, state);
  return template;
}

 /* 
   update 方法接收了 statePool 为参数，也就是
   [
        {
          mark: 12345
          state: ["count"]
        }
      ]
    
    还接收了 set 数据的时候，要更改的属性和值
  */
export function update(statePool, key, value) {
  const allElements = document.querySelectorAll("*");
  let oItem = null;

  // 进行遍历
  statePool.forEach((el) => {
    // 如果 statePool.state 中的数据等于要 set 的属性名
    if (el.state[el.state.length - 1] === key) {

      for (let i = 0; i < allElements.length; i++) {
        oItem = allElements[i];
        const _mark = parseInt(oItem.dataset.mark);

        // 如果 statePool.mark 等于某个节点的 data-mark 属性
        if (el.mark === _mark) {
          oItem.innerHTML = value;
        }
      }
    }
  });
}
