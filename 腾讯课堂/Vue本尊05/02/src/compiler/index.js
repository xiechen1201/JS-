import { parseHtmlToAst } from "./astParser";

// 将 html 编译为 AST 树
function compileToRenderFunction(html) {
  const ast = parseHtmlToAst(html);
}

export { compileToRenderFunction };
