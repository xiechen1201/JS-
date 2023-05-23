/* export default {
  created,
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  beforeUnmounte,
  Unmounted
};

// 在绑定元素 attrs 或者监听事件绑定处理之前执行（创建指令之前）
function created(el, bindings, vNode, prevNode) {
  console.log("created==", el, bindings, vNode, prevNode);
}

// 当指令第一次绑定到元素且在挂载父组件之前调用
function beforeMount(el, bindings, vNode, prevNode) {
  console.log("beforeMount==", el, bindings, vNode, prevNode);
}

// 在绑定元素的父组件被挂载前调用
function mounted(el, bindings, vNode, prevNode) {
  console.log("mounted==", el, bindings, vNode, prevNode);
}

// 在更新包含组件的 vNode 之前调用（组件更新一样会触发）
function beforeUpdate(el, bindings, vNode, prevNode) {
  console.log("beforeUpdate==", el, bindings, vNode, prevNode);
}

// 在包涵组件的 vNode 及子组件的 vNode 更新后调用
function updated(el, bindings, vNode, prevNode) {
  console.log("updated==", el, bindings, vNode, prevNode);
}

// 卸载绑定元素的父组件之前调用
function beforeUnmounte(el, bindings, vNode, prevNode) {
  console.log("beforeUnmounte==", el, bindings, vNode, prevNode);
}

// 当指令和元素接触绑定，且父组件卸载，只调用一次
function Unmounted(el, bindings, vNode, prevNode) {
  console.log("Unmounted==", el, bindings, vNode, prevNode);
}
 */
/* 

el:
    被绑定指令的元素，是一个 DOM 元素
bindings:
    arg: 例如 v-my-show:abc 指令的参数
    dir: 当前指令对象内的所有属性
    instance: 使用当前指令的组件实例
    modifiers: 例如 v-my-show.test 自定义指令的修饰符集合
    oldValue: 更新之前指令的值，beforeUpdate、updated 才会存在
    value: 当前指令绑定的值
vNode:
    绑定指令的元素的虚拟节点
prevNode: 
    上一个虚拟节点，beforeUpdate、updated 才会存在
*/

export default function (el, { value }) {
  const isShow = value;
  el.style.display = isShow ? "" : "none";
}
