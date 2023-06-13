import { ref, createRefs } from "./hooks.js";
import { render } from "./render.js";
import { bindEvent } from "./event.js";

export function createApp(el, { refs, methods }) {
  const $el = document.querySelector(el);
  const allNodes = $el.querySelectorAll("*");
  const refMap = createRefs(refs, allNodes);

  render(refMap);
  bindEvent.apply(refMap, [methods, allNodes]);
}

export { ref };
