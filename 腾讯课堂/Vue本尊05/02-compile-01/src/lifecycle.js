import { patch } from "./patch";

function mountComponent(vm) {
  vm._update(vm._render());
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode) {
    const vm = this;
    patch(vm.$el, vnode);
  };
}

export { mountComponent, lifecycleMixin };
