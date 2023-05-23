import Lazyload from "./Lazyload";

const VueLazyload = {
  install(Vue, options) {
    const LazyClass = Lazyload(Vue);
    const lazyload = new LazyClass(options);

    Vue.directive("lazy", lazyload.bindLazy.bind(lazyload));
  }
};

export default VueLazyload;
