import { ATTR, TEXT, REPLACE, REMOVE } from "./patchTypes";

let patches = {};
let vnIndex = 0;

function domDiff(oldVDOM, newVDOM) {
  let index = 0;
  vNodeWalk(oldVDOM, newVDOM, index);
  return patches;
}

function vNodeWalk(oldNode, newNode, index) {
  let vnPatch = [];

  if (!newNode) {
    vnPatch.push({
      type: REMOVE,
      index
    });
  } else if (typeof oldNode === "string" && typeof newNode === "string") {
    if (oldNode !== newNode) {
      vnPatch.push({
        type: TEXT,
        text: newNode
      });
    }
  } else if (oldNode.type === newNode.type) {
    const attrPatch = attrsWalk(oldNode.props, newNode.props);

    if (Object.keys(attrPatch).length > 0) {
      vnPatch.push({
        type: ATTR,
        attrs: attrPatch
      });
    }

    childrenWalk(oldNode.children, newNode.children);
  } else {
    vnPatch.push({ type: REPLACE, newNode });
  }

  if (vnPatch.length > 0) {
    patches[index] = vnPatch;
  }
}

// 属性对比
function attrsWalk(oldAttrs, newAttrs) {
  let attrPatch = {};

  // 修改属性
  for (const key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      attrPatch[key] = newAttrs[key];
    }
  }

  // 新增属性
  for (const key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      attrPatch[key] = newAttrs[key];
    }
  }

  return attrPatch;
}

function childrenWalk(oldChildren, newChildren) {
  oldChildren.map((el, index) => {
    vNodeWalk(el, newChildren[index], ++vnIndex);
  });
}

export { domDiff };
