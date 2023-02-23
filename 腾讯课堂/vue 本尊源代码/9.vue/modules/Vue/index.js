/**
 * {
  el: '#app',
  data () {
    return {
      isShowImg1: false,
      isShowImg2: false
      // data() -> $data -> vm
    }
  },
  template: `
    <div>
      <img v-if="isShowImg1" width="200" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F03%2F234931pwcmczi1zihcucmy.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628917111&t=39b489eccbeb07b87cf0900c428ff04d" />
      <img v-show="isShowImg2" width="200" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201312%2F31%2F111859myvyiivetyftfz2n.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628917111&t=f49cf7a4aedba0cd7caf052e4836d796" />
    </div>
    <button @click="showImg1">显示图片1</button>
    <button @click="showImg2">显示图片1</button>
  `,
  methods: {
    showImg1 () {
      this.isShowImg1 = !this.isShowImg1;
      // this -> vm -> showImg2 -> showImg2 -> vm
    },
    showImg2 () {
      this.isShowImg2 = !this.isShowImg2;
    }
  }
}
 */

/**
 * showPool   Map { dom: {} }
 * 
 * [
 *   [
 *     dom,
 *     {
 *       type: if/show
 *       prop: data
 *     }
 *   ]
 * ]
 * 
 * eventPool
 * 
 * [
 *   [
 *     dom,
 *     handler
 *   ]
 * ]
 */

var Vue = (function () {
  function Vue (options) {
    
    var recycles = {
      beforeCreate: options.beforeCreate.bind(this),
      created: options.created.bind(this),
      beforeMount: options.beforeMount.bind(this),
      mounted: options.mounted.bind(this)
    }

    recycles.beforeCreate();

    // el
    this.$el = document.querySelector(options.el);
    this.$data = options.data();

    this._init(this, options.template, options.methods, recycles);
  }

  Vue.prototype._init = function (vm, template, methods, recycles) {

    recycles.created();

    var container = document.createElement('div');
    container.innerHTML = template;
    
    var showPool = new Map();
    var eventPool = new Map();

    initData(vm, showPool);
    initPool(container, methods, showPool, eventPool);
    bindEvent(vm, eventPool);
    render(vm, showPool, container, recycles);
  }

  function initData (vm, showPool) {
    var _data = vm.$data;

    for (var key in _data) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get: function () {
            return _data[key];
          },
          set: function (newValue) {
            // this.isShowImg1 = true
            _data[key] = newValue;
            update(vm, key, showPool);
          }
        })
      })(key);
    }
  }

  function initPool (container, methods, showPool, eventPool) {
    var _allNodes = container.getElementsByTagName('*');
    var dom = null;

    for (var i = 0; i < _allNodes.length; i ++) {
      dom = _allNodes[i];

      var vIfData = dom.getAttribute('v-if');
      var vShowData = dom.getAttribute('v-show');
      var vEvent = dom.getAttribute('@click');

      if (vIfData) {
        showPool.set(
          dom,
          {
            type: 'if',
            prop: vIfData
          }
        );
        dom.removeAttribute('v-if');
      } else if (vShowData) {
        showPool.set(
          dom,
          {
            type: 'show',
            prop: vShowData
          }
        );
        dom.removeAttribute('v-show');
      }

      if (vEvent) {
        eventPool.set(
          dom, 
          methods[vEvent]
        );
        dom.removeAttribute('@click');
      }
    }
  }

  function bindEvent (vm, eventPool) {
    for (var [ dom, handler ] of eventPool) {
      vm[handler.name] = handler;
      dom.addEventListener('click', vm[handler.name].bind(vm), false);
    }
  }

  function render (vm, showPool, container, recycles) {
    var _data = vm.$data;
    var _el = vm.$el;

    for (var [ dom, info ] of showPool) {
      switch (info.type) {
        case 'if':
          info.comment = document.createComment(['v-if']);
          !_data[info.prop] && dom.parentNode.replaceChild(info.comment, dom);
          break;
        case 'show':
          !_data[info.prop] && (dom.style.display = 'none');
          break;
        default:
          break;
      }
    }

    recycles.beforeMount();
    _el.appendChild(container);
    recycles.mounted();
  }

  function update (vm, key, showPool) {
    var _data = vm.$data;

    for (var [ dom, info ] of showPool) {
      if (info.prop === key) {
        switch (info.type) {
          case 'if':
            !_data[key] ? dom.parentNode.replaceChild(info.comment, dom)
                        : info.comment.parentNode.replaceChild(dom, info.comment);
            break;
          case 'show':
            !_data[key] ? (dom.style.display = 'none')
                        : (dom.removeAttribute('style'));
            break;
          default:
            break;
        }
      }
    }
  }

  return Vue;
})();

export default Vue;