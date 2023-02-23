import { initState } from "./state";
import { compileToRenderFunction } from "./compiler";

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;

    vm.$options = options;

    initState(vm);

    if (vm.$options.el) {
      // 挂载函数  Vue.prototype.$mount
      vm.$mount(vm.$options.el);
    }
  };

  Vue.prototype.$mount = function (el) {
    const vm = this,
      options = vm.$options;

    // 把 new Vue() 时候传递的 el 属性挂载到实例上
    // 也就是 #app
    el = document.querySelector(el);
    vm.$el = el;

    // 如果 new Vue() 的时候没有提供 render 属性
    if (!options.render) {
      // 那么就去获取 template 属性
      let template = options.template;

      // 如果 template 也没有传递，那就只能去找根节点
      // 也就是 <div id="app"></div>
      if (!template && el) {
        template = el.outerHTML;
      }

      // compileToRenderFunction 方法会把获取到的模版转换为 render 函数
      const render = compileToRenderFunction(template);
      options.render = render;
    }
  };
}

export { initMixin };
