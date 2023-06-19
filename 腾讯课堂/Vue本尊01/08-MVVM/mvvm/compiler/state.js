import { randomNum } from "../shared/utils";

const reg_html = /\<.+?\>\{\{(.+?)\}\}\<\/.+?\>/g;
const reg_tag = /\<(.+?)\>/;
const reg_var = /\{\{(.+?)\}\}/g;

/**
 * {
 *  mark: _mark
 *  state: value
 * }
 */

export const statePool = [];

let o = 0;

export function stateFormat(template, state) {
  let _state = {};

  // 绑定 data-mark
  template = template.replace(reg_html, function (node, key) {
    const matched = node.match(reg_tag);
    const _mark = randomNum();

    /* 
      _state 结构如下：
      {
        mark: 12345,
      }

      statePool 结构如下：
      [
        {
          mark: 12345,
        }
      ]
    */

    _state.mark = _mark;
    statePool.push(_state);

    _state = {};

    // 例如将 <h1>{{ count }}</h1> 替换为
    // <h1 data-mark="12345">{{ count }}</h1>
    return `<${matched[1]} data-mark="${_mark}">{{ ${key} }}</${matched[1]}>`;
  });

  // 替换模版数据
  template = template.replace(reg_var, function (node, key) {
    let _var = key.trim(); // 拿到 state 里面属性的 key
    const _varArr = _var.split(".");
    let i = 0;

    while (i < _varArr.length) {
      // 去拿 state 里面对应的数据，例如 _var 为 count，所以 state.count，最后 _var 得到了 state.count 的值，也就是 0
      _var = state[_varArr[i]];
      i++;
    }

    _state.state = _varArr;
    statePool[o].state = _varArr;
    o++;

    /* 
      statePool 的结构如下：
      [
        {
          mark: 12345
          state: ["count"]
        }
      ]
    */

    // 将 <h1 data-mark="12345">{{ count }}</h1> 中的 count 替换为真实的数据
    return _var;
  });

  return template;
}
