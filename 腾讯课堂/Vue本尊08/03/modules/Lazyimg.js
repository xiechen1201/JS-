import { imgLoad } from "./utils";

export default class Lazyimg {
  constructor({ el, src, options, imgRender }) {
    this.el = el;
    this.src = src;
    this.options = options;
    this.imgRender = imgRender;
    this.loaded = false;

    this.state = {
      loading: false,
      error: false
    };
  }

  checkVisible() {
    const { top } = this.el.getBoundingClientRect();
    return top < window.innerHeight * (this.options.preload || 1);
  }

  loadImg() {
    this.imgRender(this, "loading");

    imgLoad(this.src)
      .then((res) => {
        this.state.loading = true;
        this.imgRender(this, "ok");
        this.loaded = true;
      })
      .catch((error) => {
        this.state.error = true;
        this.imgRender(this, "error");
        this.loaded = true;
      });
  }
}
