let computedData = {};
let reg_var = /\{\{(.+?)\}\}/g;
let dataPool = {};

function VueTest(options) {
  this.$el = document.querySelector(options.el);
  this.$data = options.data();

  this._init(options.template, options.computed);
}
VueTest.prototype._init = function (template, computed) {
  dataReactive(this);
  computedReactive(this, computed);
  render(this, template);
};

function render(vm, template) {
  let container = document.createElement("div");
  let _el = vm.$el;

  container.innerHTML = template;
  let domTree = _compileTemplate(vm, container);

  _el.appendChild(domTree);
}

function update(vm, key) {
  dataPool[key.trim()].textContent = vm[key];
}

function _compileTemplate(vm, container) {
  let allNodes = container.getElementsByTagName("*");
  let nodeItem = null;

  for (let i = 0; i < allNodes.length; i++) {
    nodeItem = allNodes[i];
    let matched = nodeItem.textContent.match(reg_var);
    
    if (matched) {
      nodeItem.textContent = nodeItem.textContent.replace(reg_var, function (node, key) {
        dataPool[key.trim()] = nodeItem;
        return vm[key.trim()];
      });
    }
  }
  return container;
}

function dataReactive(vm) {
  let _data = vm.$data;

  for (const k in _data) {
    if (Object.hasOwnProperty.call(_data, k)) {
      Object.defineProperty(vm, k, {
        get() {
          return _data[k];
        },
        set(newVal) {
          _data[k] = newVal;
          update(vm, k);
          _updateComputedData(vm, k, function () {
            update(vm, k);
          });
        }
      });
    }
  }
}

function computedReactive(vm, computed) {
  _initComputedData(vm, computed);

  for (const key in computedData) {
    (function (key) {
      Object.defineProperty(vm, key, {
        get() {
          return computedData[key].value;
        },
        set(newVal) {
          computedData[key].value = newVal;
        }
      });
    })(key);
  }
}

function _initComputedData(vm, computed) {
  for (const key in computed) {
    let descriptor = Object.getOwnPropertyDescriptor(computed, key);
    let descriptorFn = descriptor.value.get ? descriptor.value.get : descriptor.value;

    computedData[key] = {};
    computedData[key].value = descriptorFn.call(vm);
    computedData[key].get = descriptorFn.bind(vm);
    computedData[key].dep = _collectDep(descriptorFn);
  }
}

function _collectDep(fn) {
  let _collection = fn.toString().match(/this.(.+?)/g);

  if (_collection.length > 0) {
    for (let i = 0; i < _collection.length; i++) {
      _collection[i] = _collection[i].split(".")[1];
    }
  }
  return _collectDep;
}

function _updateComputedData(vm, key, update) {
  let _dep = null;

  for (const _key in computedData) {
    _dep = computedData[_key].dep;

    for (let i = 0; i < _dep.length; i++) {
      if (_dep[i] === key) {
        vm[_key] = computedData[_key].get();
        update(_key);
      }
    }
  }
}

let vm2 = new VueTest({
  el: "#app2",
  template: `
    <span>{{ a }}</span>
    <span>+</span>
    <span>{{ b }}</span>
    <span>=</span>
    <span>{{ total }}</span>
  `,
  data() {
    return {
      a: 1,
      b: 2
    };
  },
  computed: {
    total() {
      return this.a + this.b;
    }
  }
});

console.log(vm2, vm2.total);
vm2.a = 100;
console.log(vm2, vm2.total);
