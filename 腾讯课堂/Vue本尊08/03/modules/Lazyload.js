import { nextTick } from "vue";
import { getScrollParent } from "./utils";
import Lazyimg from "./Lazyimg";

export default function Lazyload(Vue) {
  return class Lazy {
    constructor(options) {
      this.options = options;
      this.isAddScrollListener = false;
      this.lazyImgPool = [];
    }

    bindLazy(el, binding) {
      nextTick(() => {
        const scrollParent = getScrollParent(el);

        if (scrollParent && !this.isAddScrollListener) {
          scrollParent.addEventListener("scroll", this.handleScroll.bind(this));
          this.isAddScrollListener = true;
        }

        const lazyimg = new Lazyimg({
          el,
          src: binding.value,
          options: this.options,
          imgRender: this.imgRender.bind(this)
        });

        this.lazyImgPool.push(lazyimg);
        this.handleScroll();
      });
    }

    handleScroll() {
      this.lazyImgPool.forEach((el) => {
        let isVisible = false;

        if (!el.loaded) {
          isVisible = el.checkVisible();
          isVisible && el.loadImg();
        }
      });
    }

    imgRender(lazyimg, state) {
      const {
        el,
        options: { loading, error }
      } = lazyimg;
      let src = "";

      switch (state) {
        case "loading":
          src = loading || "";
          break;
        case "error":
          src = error || "";
          break;
        default:
          src = lazyimg.src;
      }

      el.setAttribute("src", src);
    }
  };
}
