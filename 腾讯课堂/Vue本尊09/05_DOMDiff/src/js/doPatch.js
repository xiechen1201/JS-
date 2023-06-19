import { ATTR, TEXT, REPLACE, REMOVE } from "./patchTypes";
import { setAttrs, render } from "./virtualDom";
import Element from "./Element";

let finalPatches = {};
let rnIndex = 0;

function doPatch(rDom, patches) {
  finalPatches = patches;
  rNodeWalk(rDom);
}

function rNodeWalk(rNode) {
  const rnPatch = finalPatches[rnIndex++];
  const childNodes = rNode.childNodes;

  [...childNodes].map((el) => {
    rNodeWalk(el);
  });

  if (rnPatch) {
    patchAction(rNode, rnPatch);
  }
}

function patchAction(rNode, rnPacth) {
  rnPacth.map((el) => {
    switch (el.type) {
      case ATTR:
        for (const key in el.attrs) {
          const value = el.attrs[key];

          if (value) {
            setAttrs(rNode, key, value);
          } else {
            rNode.removeAttribute(key);
          }
        }
        break;
      case TEXT:
        rNode.textContent = el.text;
        break;
      case REPLACE:
        const newNode =
          el.newNode instanceof Element
            ? render(el.newNode)
            : document.createTextNode(el.newNode);

        rNode.parentNode.replaceChild(newNode, rNode);
        break;
      case REMOVE:
        rNode.parentNode.removeChild(rNode);
        break;
    }
  });
}

export { doPatch };
