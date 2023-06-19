const customTags = ["if", "for"];
const reg_single_bracket = /\{(.*?)\}/g;
const reg_double_bracket = /\{\{(.*?)\}\}/g;

export function compileTemplate(template, state) {
  template = replaceVar(template, state, reg_double_bracket);
  
  const _node = document.createElement("div");
  _node.innerHTML = template;

  return compileNode(_node, state);
}

function compileNode(node, state) {
  const allNodes = node.querySelectorAll("*");

  allNodes.forEach((item) => {
    const tageName = item.tagName.toLowerCase();

    if (customTags.includes(tageName)) {
      replaceNode(item, tageName, state);
    }
  });

  return [...node.childNodes].find((el) => el.nodeType === 1);
}

function replaceNode(item, tageName, state) {
  const dataKey = item.getAttribute("data");
  const realTag = item.getAttribute("tag");
  const className = item.className;

  switch (tageName) {
    case "for":
      vFor(item, state, dataKey, realTag, className);
      break;
  }
}

function vFor(node, state, dataKey, realTag, className) {
  const oFrag = document.createDocumentFragment();

  state[dataKey].forEach((item) => {
    const el = document.createElement(realTag);
    el.className = className || "";
    el.innerHTML = replaceVar(node.innerHTML, item, reg_single_bracket);
    oFrag.appendChild(el);
  });

  node.parentNode.replaceChild(oFrag, node);
}

function replaceVar(html, data, reg) {
  return html.replace(reg, (node, key) => {
    const obj = {};
    key = key.trim();
    return (obj[key] = data[key]);
  });
}
