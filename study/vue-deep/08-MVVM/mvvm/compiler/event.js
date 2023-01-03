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

    eventPool.push({
      mark: _mark,
      handler: key.trim(),
      type: "click",
    });

    return `data-mark="${_mark}"`;
  });
}

export function bindEvent(methods) {
  const allElements = document.querySelectorAll("*");
  let oItem = null;
  let _mark = 0;

  // 循环对比
  eventPool.forEach((el) => {
    for (let i = 0; i < allElements.length; i++) {
      oItem = allElements[i];
      _mark = parseInt(oItem.getAttribute("data-mark"));

      if (el.mark === _mark) {
        oItem.addEventListener(
          el.type,
          function () {
            const fnName = el.handler.match(reg_fnName)[1];
            const arg = checkType(el.handler.match(reg_arg)[1]);

            methods[fnName](arg);
          },
          false
        );
      }
    }
  });
}
