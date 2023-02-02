import { bindEvent } from "./compiler/event";
import { eventFormat, stateFormat } from "./index";

export function useDom({ template, state, methods }, rootDom) {
  rootDom.innerHTML = render(template, state);
  bindEvent(methods);
}

export function render(template, state) {
  template = eventFormat(template);
  template = stateFormat(template, state);

  return template;
}

export function update(statePool, key, value) {
  const allElements = document.querySelectorAll("*");
  let oItem = null;

  statePool.forEach((el) => {
    if (el.state[el.state.length - 1] === key) {
      for (let i = 0; i < allElements.length; i++) {
        oItem = allElements[i];

        const _mark = parseInt(oItem.dataset.mark);

        if (el.mark === _mark) {
          oItem.innerHTML = value;
        }
      }
    }
  });
}
