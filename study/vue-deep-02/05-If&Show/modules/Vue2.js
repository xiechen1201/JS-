var VueTest = (function () {
  function Vue(options) {
    var recycles = {
      beforeCreate: options.beforeCreate.bind(this),
      created: options.created.bind(this),
      beforeMount: options.beforeMount.bind(this),
      mounted: options.mounted.bind(this),
    };

    recycles.beforeCreate();

    this.$el = document.querySelector(options.el);
    this.$data = options.data();

    this._init(options.template, options.methods, recycles);
  }

  Vue.prototype._init = function (template, methods, recycles) {
    recycles.created();

    var showPool = new Map();
    var eventPool = new Map();

    var container = document.createElement("div");
    container.innerHTML = template;

    initData(this, showPool);
    initPool(container, methods, showPool, eventPool);
    bindEvent(this, eventPool);
    render(this, showPool, container, recycles);
  };

  function initData(vm, showPool) {
    var _data = vm.$data;

    for (const key in _data) {
      if (Object.hasOwnProperty.call(_data, key)) {
        Object.defineProperty(vm, key, {
          get: function () {
            return _data[key];
          },
          set: function (newVal) {
            _data[key] = newVal;
            update(vm, key, showPool);
          },
        });
      }
    }
  }

  function initPool(container, methods, showPool, eventPool) {
    var _allNodes = container.getElementsByTagName("*");
    var dom = null;

    for (let i = 0; i < _allNodes.length; i++) {
      dom = _allNodes[i];

      var vIfData = dom.getAttribute("v-if");
      var vShowData = dom.getAttribute("v-show");
      var vEvent = dom.getAttribute("@click");

      if (vIfData) {
        showPool.set(dom, {
          type: "if",
          prop: vIfData,
        });
        dom.removeAttribute("v-if");
      } else if (vShowData) {
        showPool.set(dom, {
          type: "show",
          prop: vShowData,
        });
        dom.removeAttribute("v-show");
      }
      if (vEvent) {
        eventPool.set(dom, methods[vEvent]);
        dom.removeAttribute("@click");
      }
    }
  }

  function bindEvent(vm, eventPool) {
    for (var [dom, handler] of eventPool) {
      vm[handler.name] = handler;
      dom.addEventListener("click", vm[handler.name].bind(vm), false);
    }
  }

  function render(vm, showPool, container, recycles) {
    var _data = vm.$data;
    var _el = vm.$el;

    for (const [dom, info] of showPool) {
      switch (info.type) {
        case "if":
          info.comment = document.createComment(["v-if"]);
          !_data[info.prop] && dom.parentNode.replaceChild(info.comment, dom);
          break;
        case "show":
          !_data[info.prop] && (dom.style.display = "none");
          break;
      }
    }

    recycles.beforeMount();

    _el.appendChild(container);

    recycles.mounted();
  }

  function update(vm, key, showPool) {
    var _data = vm.$data;

    for (const [dom, info] of showPool) {
      if (info.prop === key) {
        switch (info.type) {
          case "show":
            !_data[key] ? (dom.style.display = "none") : dom.removeAttribute("style");
            break;
          case "if":
            !_data[key]
              ? dom.parentNode.replaceChild(info.comment, dom)
              : info.comment.parentNode.replaceChild(dom, info.comment);
            break;
        }
      }
    }
  }

  return Vue;
})();

export default VueTest;
