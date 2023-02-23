//  * 计算属性：解决模板中复杂的逻辑运算及复用的问题
//  * 计算属性只在内部逻辑依赖的数据发生变化的时候才会被再次调用
//  * 计算属性会缓存其依赖的上一次计算出的数据结果
//  * 多次复用一个相同值的数据，计算属性只调用一次

/**
 * var vm = new Vue({
  el: '#app',
  template: `
    <span>{{ a }}</span>
    <span>+</span>
    <span>{{ b }}</span>
    <span>=</span>
    <span>{{ total }}</span>
  `,
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  computed: {
    total () {
      console.log('computed total');
      return this.a + this.b;
    }
  }
});
 * 
 */

var Vue = (function () {

  var reg_var = /\{\{(.+?)\}\}/g,
      computedData = {},
      dataPool = {};
  /**
   * total: {
   *   value: 函数执行返回的结果
   *   get: get
   *   dep: ['a', 'b']
   * }
   */

  var Vue = function (options) {
    this.$el = document.querySelector(options.el);
    this.$data = options.data();

    this._init(this, options.computed, options.template);
  }

  Vue.prototype._init = function (vm, computed, template) {
    dataReactive(vm);
    computedReactive(vm,computed);
    render(vm, template);
  }

  function render (vm, template) {
    var container = document.createElement('div'),
        _el = vm.$el;
    
    container.innerHTML = template;

    var domTree = _compileTemplate(vm, container);

    _el.appendChild(domTree);
  }

  function update (vm, key) {
    dataPool[key].textContent = vm[key];
  }

  function _compileTemplate (vm, container) {
    var allNodes = container.getElementsByTagName('*'),
        nodeItem = null;

    for (var i = 0; i < allNodes.length; i ++) {
      nodeItem = allNodes[i];

      var matched = nodeItem.textContent.match(reg_var);
      
      if (matched) {
        nodeItem.textContent = nodeItem.textContent.replace(reg_var, function (node, key) {
          dataPool[key.trim()] = nodeItem;
          return vm[key.trim()];
        })
      }
    }

    return container;
  }

  function dataReactive (vm) {
    var _data = vm.$data;

    for (var key in _data) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get () {
            return _data[key];
          },
          set (newValue) {
            _data[key] = newValue;
            update(vm, key);
            _updateComputedData(vm, key, function (key) {
              update(vm, key);
            })
          }
        })
      })(key);
    }
  }

  function computedReactive (vm, computed) {
    _initComputedData(vm, computed);

    for (var key in computedData) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get () {
            return computedData[key].value;
          },
          set (newValue) {
            computedData[key].value = newValue;
          }
        }) 
      })(key);
    }
  }

  function _initComputedData (vm, computed) {
    for (var key in computed) {
      var descriptor = Object.getOwnPropertyDescriptor(computed, key),
          descriptorFn = descriptor.value.get 
                         ? descriptor.value.get
                         : descriptor.value;

      /**
       * total: {
       *   value: 函数执行返回的结果
       *   get: get
       *   dep: ['a', 'b']
       * }
       */
      
      computedData[key] = {};
      computedData[key].value = descriptorFn.call(vm);
      computedData[key].get = descriptorFn.bind(vm);
      computedData[key].dep = _collectDep(descriptorFn);
    }
  }

  function _collectDep (fn) {
    var _collection = fn.toString().match(/this.(.+?)/g);
    
    if (_collection.length > 0) {
      for (var i = 0; i < _collection.length; i ++) {
        _collection[i] = _collection[i].split('.')[1];
      }
    }

    return _collection;
  }

  function _updateComputedData (vm, key, update) {
    var _dep = null;

    for (var _key in computedData) {
      _dep = computedData[_key].dep;

      for (var i = 0; i < _dep.length; i ++) {
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
