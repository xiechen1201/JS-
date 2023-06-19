import Element from "./Element";

function setAtrrs(node, prop, value) {
  switch (prop) {
    case "value":
      if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
        node.value = value;
      } else {
        node.setAttribute(prop, value);
      }
      break;
    case "style":
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(prop, value);
      break;
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}

function render(vDom) {
  const { type, props, children } = vDom;

  const el = document.createElement(type);

  for (const key in props) {
    setAtrrs(el, key, props[key]);
  }

  children.map((c) => {
    c = c instanceof Element ? render(c) : document.createTextNode(c);
    el.appendChild(c);
  });

  return el;
}

function renderDOM(rDom, rootEL) {
  rootEL.appendChild(rDom);
}

export { createElement, render, renderDOM, setAtrrs };
