/**
 * checkType 方法用于
 * randomNum 方法用于生成一串随机数字
 */
import { checkType, randomNum } from "../shared/utils";

/**
 * {
 *  mark: random,
 *  handler: 事件处理函数的字符串
 *  type: click
 * }
 */
const reg_onClick = /onClick\=\"(.+?)\"/g;
const reg_fnName = /^(.+?)\(/;
const reg_arg = /\((.*?)\)/;
const eventPool = [];

export function eventFormat(template) {
  return template.replace(reg_onClick, function (node, key) {
    const _mark = randomNum();

    // 把数据的对应关系存到 eventPool 里面，方面我们进行对比调用
    eventPool.push({
      mark: _mark,
      handler: key.trim(),
      type: "click",
    });

    /* 
      eventPool 结构如下：
      [
        {
          mark: 12345 // dom 标签上的 data-mark 
          handler: add(2)
          type: click
        }
      ]
    */

    // 给标签新增一个 data-mark="12345" 这样的属性
    return `data-mark="${_mark}"`;
  });
}

export function bindEvent(methods) {
  const allElements = document.querySelectorAll("*");
  let oItem = null;
  let _mark = 0;

  /* 
    eventPool 结构如下：
    [
      {
        mark: 12345 // dom 标签上的 data-mark 
        handler: add(2)
        type: click
      }
    ]
  */

  // 循环对比
  eventPool.forEach((el) => {
    for (let i = 0; i < allElements.length; i++) {
      oItem = allElements[i];
      _mark = parseInt(oItem.getAttribute("data-mark"));

      // 如果 eventPool 中 el.mark 等于某个 dom 的 data-mark 的属性
      if (el.mark === _mark) {
        // 绑定事件
        oItem.addEventListener(el.type, function () {
            const fnName = el.handler.match(reg_fnName)[1];
            const arg = checkType(el.handler.match(reg_arg)[1]);

            // 调用 state.methods 里面对应的方法
            methods[fnName](arg);
          }, false);
      }
    }
  });
}
