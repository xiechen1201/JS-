import { REG_SPACE, REG_OBJ, REG_ARR } from "./regular.js";
import { transformToKebab } from "./utils.js";

export function compileAttr(vm, el, name, value) {
  name = name.replace(":", "");
  value = value.replace(REG_SPACE, "");

  vm.$stylePool.set(el, {
    type: name,
    exprression: value
  });

  switch (name) {
    case "class":
      if (REG_OBJ.test(value)) {
        const keyValueArr = value.match(REG_OBJ)[1].split(",");
        let classStr = "";

        keyValueArr.forEach((item) => {
          const [key, value] = item.split(":");
          if (vm[value.trim()]) {
            classStr += ` ${key.trim()}`;
          }
        });

        el.setAttribute("class", classStr.trim());
      } else if (REG_ARR.test(value)) {
        const classArr = renderArr(vm, value);
        el.setAttribute("class", classArr.join(" ").trim());
      }
      break;
    case "style":
      let styleStr = "";

      if (REG_OBJ.test(value)) {
        const styleObj = renderObj(vm, value);

        for (const key in styleObj) {
          styleStr += `${transformToKebab(key)}:${styleObj[key]};`;
        }
      } else if (REG_ARR.test(value)) {
        const styleArr = renderArr(vm, value);

        styleArr.forEach((item) => {
          for (const key in item) {
            styleStr += `${transformToKebab(key)}:${item[key]};`;
          }
        });
      }

      el.setAttribute("style", styleStr);
      break;
  }
}

function renderArr(vm, value) {
  const arr = new Function(
    "vm",
    `with(vm) {
        return ${value};
    }`
  )(vm);
  return arr.filter((el) => el);
}

function renderObj(vm, value) {
  return new Function(
    "vm",
    `with(vm){
        return ${value}
    }`
  )(vm);
}
