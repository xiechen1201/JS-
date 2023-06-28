/* 
<div id="app" style="color: red; font-size: 20px">

利用正则先匹配 <div 然后转换为对应的结构，例如 tag: "div"，然后把 <div 从字符串中删除，继续匹配 id="app" 和后面的属性，匹配后继续删除，以此类推！

只要匹配到 > 就表示单个标签结束。
*/

// 匹配属性： id="app" 或者 id='app' 或者 id=app
const attribute =
  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;

// 匹配标签名： <div></div> 或者 <my-header></my-header>
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;

// 匹配特殊的标签名： <my:header></my:header>
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;

// 匹配标签开头：<div
const startTagOpen = new RegExp(`^<${qnameCapture}`);

// 匹配标签结尾：> 或者 />
const startTagClose = /^\s*(\/?)>/;

// 匹配整个结束标签：</div>
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);

function parseHtmlToAst(html) {
  let text;
  let root;
  let currentParent;
  let stack = [];

  while (html) {
    let textEnd = html.indexOf("<");

    // 如果是一段标签的开头
    if (textEnd === 0) {
      const startTagMatch = parseStartTag();

      if (startTagMatch) {
        start(startTagMatch.tagName, startTagMatch.attrs);
        continue;
      }

      // 匹配结束标签 </div>
      const endTagMatch = html.match(endTag);

      if (endTagMatch) {
        advance(endTagMatch[0].length);
        end(endTagMatch[1]);
        continue;
      }
    }

    // 如果 < 不是开头的位置
    if (textEnd > 0) {
      text = html.substring(0, textEnd);
    }

    if (text) {
      advance(text.length);
      chars(text);
    }
  }

  function parseStartTag() {
    // 得到 [<div, div]
    const start = html.match(startTagOpen);
    let end;
    let attr;

    if (start) {
      const match = {
        tagName: start[1],
        attrs: []
      };

      // 把 <div 从 html 字符串中删除
      // 得到 id="app" style="color: red; font-size: 20px">
      advance(start[0].length);

      // 处理属性
      // 如果没有匹配到 > 或者 /> 但是匹配到了属性
      while (
        !(end = html.match(startTagClose)) &&
        (attr = html.match(attribute))
      ) {
        // 这是因为 id="app" 和 id='app' 和 id=app 的位置不同
        match.attrs.push({
          name: attr[1],
          value: attr[3] || attr[4] || attr[5]
        });

        // 删除 id="app"
        advance(attr[0].length);
      }

      // 如果匹配到了 > 或者 />
      if (end) {
        advance(end[0].length);
        return match;
      }
    }
  }

  function advance(n) {
    html = html.substring(n);
  }

  function start(tagName, attrs) {
    // 得到
    // {tag: 'div', type: 1, children: Array(0), attrs: Array(2), parent: null}
    const element = createASTElement(tagName, attrs);

    if (!root) {
      root = element;
    }

    // 因为是一个树的结构，所以我们需要知道父子级的关系
    // stack[div, span]
    currentParent = element;
    stack.push(element);
  }

  function end(tagName) {
    // span
    const element = stack.pop();
    // div
    currentParent = stack[stack.length - 1];

    if (currentParent) {
      // span => parent => div
      element.parent = currentParent;
      // div => children => push => span
      currentParent.children.push(element);
    }
  }

  function chars(text) {
    text = text.trim();

    if (text.length > 0) {
      currentParent.children.push({
        type: 3,
        text: text
      });
    }
  }

  function createASTElement(tagName, attrs) {
    return {
      tag: tagName,
      type: 1,
      children: [],
      attrs: attrs,
      parent: null
    };
  }

  return root;
}

export { parseHtmlToAst };
