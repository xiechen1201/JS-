import comp1 from './components/Comp1';
import comp2 from './components/Comp2';
import comp3 from './components/Comp3';

const oButtons = document.getElementById('buttons');
const oWrapper = document.getElementById('wrapper');

const App = {
  components: {
    comp1,
    comp2,
    comp3
  },
  compCache: {},
  init () {
    this.bindEvent();
  },
  mounted (callback) {
    callback && callback();
  },
  activated (callback) {
    callback && callback();
  },
  bindEvent () {
    oButtons.addEventListener('click', this.handleBtnClick.bind(this), false);
  },
  handleBtnClick (e) {
    const tar = e.target,
          tagName = tar.tagName.toLowerCase();
    
    if (tagName === 'span') {
      const key = tar.dataset.key;
      
      let vNode = null;

      if (this.compCache[key]) {
        vNode = this.compCache[key];
      } else {
        vNode = this.setVNode(this.components[key]);

        if (this.checkKeepAlive(oWrapper)) {
          this.compCache[key] = vNode;
        }
      }
      
      const rNode = this.setRNode(vNode);
      oWrapper.innerHTML = '';
      oWrapper.appendChild(rNode);

      if (this.checkKeepAlive(oWrapper)) {
        this.activated(() => {
          console.log(key, 'activated');
        })
      } else {
        this.mounted(() => {
          console.log(key, 'mounted');
        })
      }
    }
  },
  setVNode (comp) {
    const { template, name } = comp;

    const regTag = template.match(/\<(.+?)\>/)[1],
          regContent = template.match(/\>(.+?)\</)[1];

    return {
      tag: regTag,
      children: regContent,
      mark: name
    }
  },

  setRNode (vNode) {
    const tag = vNode.tag;
    const content = vNode.children;

    const node = document.createElement(tag);
    node.innerText = content;

    return node;
  },

  checkKeepAlive (wrapper) {
    const outerWrapper = wrapper.parentNode.tagName.toLowerCase();
    return outerWrapper === 'keep-alive';
  }
}

App.init();

