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
      const vNode = this.setVNode(this.components[key]);
      const rNode = this.setRNode(vNode);

      oWrapper.innerHTML = "";
      oWrapper.appendChild(rNode);
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
  }
};

App.init();