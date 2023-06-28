import { initState } from "./state";
import { compileToRenderFunction } from "./compiler";
import { mountComponent } from "./lifecycle";

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;

    vm.$options = options;

    if (vm.$options.el) {
      // 挂载函数，作用是把执行 5 步
      // 是 Vue 原型上的函数
      vm.$mount(vm.$options.el);
    }

    initState(vm);
  };

  Vue.prototype.$mount = function (el) {
    const vm = this;
    const options = vm.$options;

    el = document.querySelector(el);
    vm.$el = el;

    // 如果没有 render 选项
    if (!options.render) {
      // 就去获取 template 选项
      let template = options.template;

      // 如果 template 不存在，但是 el 存在
      if (!template && el) {
        template = el.outerHTML;
      }

      // 把 template 转换为 render 函数
      // 需要做的：
      // 1、template 转换为 AST 树
      // 2、AST 树转换为 render 函数
      const render = compileToRenderFunction(template);
      options.render = render;
    }

    mountComponent(vm);
  };
}

export { initMixin };
