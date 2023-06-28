/* 
_c() => createElement()
_v() => createTextNode()
_s() => {{ name }} => _s(name)

*/

/* function render() {
  return `
    _c(
        "div", 
        {
            "id": "app", 
            "style": {
                "color": "red", 
                "font-size: "20px" 
            } 
        },
        _v("您好，", _s(name)),
        _c(
            "span",
            {
                "class": "text",
                "style": {
                    "color": "green"
                }
            }
        )
    )
    `;
} */

let defautlTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;

function formatProps(attrs) {
  let attrStr = "";

  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i];

    if (attr.name === "style") {
      let styleAttrs = {};
      attr.value.split(";").map((styleAttr) => {
        let [key, value] = styleAttr.split(":");
        styleAttrs[key] = value;
      });
      attr.value = styleAttrs;
    }

    attrStr += `${attr.name}:${JSON.stringify(attr.value)},`;
  }

  return `{${attrStr.slice(0, -1)}}`;
}

function generateChild(node) {
  if (node.type === 1) {
    return generate(node);
  } else if (node.type === 3) {
    let text = node.text;

    if (!defautlTagRE.test(text)) {
      return `_v(${JSON.stringify(text)})`;
    }

    let match;
    let index;
    let lastIndex = (defautlTagRE.lastIndex = 0);
    let textArr = [];

    while ((match = defautlTagRE.exec(text))) {
      index = match.index;

      if (index > lastIndex) {
        textArr.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      textArr.push(`_s(${match[1].trim()})`);
      lastIndex = index + match[0].length;
    }

    if (lastIndex < text.length) {
      textArr.push(JSON.stringify(text.slice(lastIndex)));
    }

    return `_v(${textArr.join("+")})`;
  }
}

function getChildren(el) {
  const children = el.children;

  if (children) {
    return children.map((c) => generateChild(c)).join(",");
  }
}

function generate(el) {
  let children = getChildren(el);

  let code = `_c('${el.tag}', ${
    el.attrs.length > 0 ? `${formatProps(el.attrs)}` : "undefinde"
  }${children ? `,${children}` : ""})`;

  return code;
}

export { generate };
