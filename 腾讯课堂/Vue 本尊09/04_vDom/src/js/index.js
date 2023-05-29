import { createElement, render, renderDOM } from "./virtualDom";

const vDom = createElement(
  "ul",
  {
    class: "list",
    style: "width: 300px; height: 300px; background-color: orange"
  },
  [
    createElement("li", { class: "item", "data-index": 0 }, [
      createElement("p", { class: "text" }, ["第1个列表项"])
    ]),
    createElement("li", { class: "item", "data-index": 1 }, [
      createElement("p", { class: "text" }, [
        createElement("span", { class: "title" }, ["第2个列表项"])
      ])
    ]),
    createElement("li", { class: "item", "data-index": 2 }, ["第3个列表项"])
  ]
);

const rDom = render(vDom);
renderDOM(rDom, document.getElementById("app"));

console.log(vDom);
console.log(rDom);
