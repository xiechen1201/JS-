import Ref from "./Ref.js";

const ref_var = /\{\{(.+?)\}\}/;

export function ref(initialValue) {
  return new Ref(initialValue);
}

// ref.deps 的依赖收集
export function createRefs(refs, allNodes) {
  allNodes.forEach((element) => {
    if (ref_var.test(element.innerText)) {
      // element.innerText.match(ref_var)
      // 得到  ['{{title}}', 'title']
      const refKey = element.innerText.match(ref_var)[1].trim();

      if (refs[refKey]) {
        refs[refKey].deps.add(element);
      }
    }
  });

  return refs
}
