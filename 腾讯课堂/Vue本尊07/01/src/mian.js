import comp1 from "./components/Comp1";
import comp2 from "./components/Comp2";
import comp3 from "./components/Comp3";

const oBtns = document.getElementById("buttons");
const oWrapper = document.getElementById("wrapper");

const App = {
  components: {
    comp1,
    comp2,
    comp3
  },
  mounted(callback) {
    callback && callback();
  },
  activated(callback) {
    callback && callback();
  },
  compCache: {},
  init() {
    this.bindEvent();
  },
  bindEvent() {
    oBtns.addEventListener("click", this.handleBtnClick.bind(this), false);
  },
  handleBtnClick(e) {
    const tar = e.target;
    const tagName = tar.tagName.toLowerCase();

    if (tagName === "span") {
      const key = tar.dataset.key;

      let vNode = null;

      // 如果缓存中存在 key
      if (this.compCache[key]) {
        vNode = this.compCache[key];
      } else {
        vNode = this.setVNode(this.components[key]);

        if (this.checkKeppAlive(oWrapper)) {
          this.compCache[key] = vNode;
        }
      }

      const rNode = this.setRNode(vNode);
      oWrapper.innerHTML = "";
      oWrapper.appendChild(rNode);

      if (this.checkKeppAlive(oWrapper)) {
        this.activated(() => {
          console.log(key, "activated");
        });
      } else {
        this.mounted(() => {
          console.log(key, "mounted");
        });
      }
    }
  },
  setVNode(comp) {
    const { template, name } = comp;
    const regTag = template.match(/\<(.+?)\>/)[1];
    const regContent = template.match(/\>(.+?)\</)[1];

    return {
      tag: regTag,
      children: regContent,
      mark: name
    };
  },
  setRNode(vNode) {
    const { tag, children, mark } = vNode;

    const node = document.createElement(tag);
    node.innerText = children;

    return node;
  },
  checkKeppAlive(wrapper) {
    const outerWrapper = wrapper.parentNode.tagName.toLowerCase();
    return outerWrapper === "keep-alive";
  }
};

App.init();
