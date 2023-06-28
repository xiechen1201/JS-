import { parseHtmlToAst } from "./astParser";
import { generate } from "./generate";

function compileToRenderFunction(html) {
  // 把 html 字符串转换为 AST 树
  const ast = parseHtmlToAst(html);
  const code = generate(ast);

  // 得到 render 函数
  const render = new Function(`
    with(this){ return ${code} }
  `);

  return render;
}

export { compileToRenderFunction };
