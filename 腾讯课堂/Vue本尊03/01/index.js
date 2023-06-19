var Vue = (function () {
  var reg_var = /\{\{(.+?)\}\}/g;
  var dataPool = {};
  var computedData = {};

  /**
   * total: {
   *    value: 函数执行返回的结果
   *    get: get
   *    dep: ['a', 'k']
   * }
   */

  var Vue = function (options) {
    this.$el = document.querySelector(options.el);
    this.$data = options.data();

    this._init(this, options.computed, options.template);
  };

  Vue.prototype._init = function (vm, computed, template) {
    dataReactive(vm);
    computedReactive(vm, computed);
    render(vm, template);
  };

  function render(vm, template) {
    var container = document.createElement("div");
    var el = vm.$el;

    container.innerHTML = template;

    var domTree = _compileTemplate(vm, container);
    el.appendChild(domTree);
  }

  function _compileTemplate(vm, container) {
    var allNodes = container.getElementsByTagName("*");
    var nodeItem = null;

    for (let index = 0; index < allNodes.length; index++) {
      nodeItem = allNodes[index];

      var matched = nodeItem.textContent.match(reg_var);

      if (matched) {
        nodeItem.textContent = nodeItem.textContent.replace(reg_var, function (node, key) {
          dataPool[key.trim()] = nodeItem;
          return vm[key.trim()];
        });
      }
    }

    return container;
  }

  function update(vm, key) {
    dataPool[key.trim()].textContent = vm[key];
  }

  function dataReactive(vm) {
    var _data = vm.$data;

    for (const key in _data) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get() {
            return _data[key];
          },
          set(neValue) {
            _data[key] = neValue;
            
            update(vm, key);
            _updateComputedData(vm, key, function (key) {
              update(vm, key);
            });
          }
        });
      })(key);
    }
  }

  function computedReactive(vm, computed) {
    _initComputedData(vm, computed);

    for (const key in computedData) {
      (function () {
        Object.defineProperty(vm, key, {
          get() {
            return computedData[key].value;
          },
          set(newVal) {
            computedData[key].value = newVal;
          }
        });
      })();
    }
  }

  function _initComputedData(vm, computed) {
    for (const key in computed) {
      var descriptor = Object.getOwnPropertyDescriptor(computed, key);
      var descriptorFn = descriptor.value.get ? descriptor.value.get : descriptor.value;

      // computedData.total = {}
      computedData[key] = {};
      computedData[key].value = descriptorFn.call(vm);
      computedData[key].get = descriptorFn.bind(vm);
      computedData[key].dep = _collectDep(descriptorFn);
    }
  }

  function _collectDep(fn) {
    var _collection = fn.toString().match(/this\.(.+?)/g);

    if (_collection.length > 0) {
      for (let i = 0; i < _collection.length; i++) {
        _collection[i] = _collection[i].split(".")[1];
      }
    }

    return _collection;
  }

  function _updateComputedData(vm, key, update) {
    var _dep = null;

    for (const _key in computedData) {
      _dep = computedData[_key].dep;

      for (var i = 0; i < _dep.length; i++) {
        if (_dep[i] === key) {
          vm[_key] = computedData[_key].get();
          update(_key);
        }
      }
    }
  }

  return Vue;
})();

export default Vue;
