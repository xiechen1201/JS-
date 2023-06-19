(function () {
  function init() {
    model.init(); // 组织数据，监听数据（数据代理）
    view.render(); // 组织 HTML 模版 + 渲染 HTML 模版
    controller.init(); // 事件处理函数的定义和绑定
  }

  // 数据层
  var model = {
    // 数据管理
    data: {
      a: 0,
      b: 0,
      s: "+",
      r: 0
    },
    // 对数据进行劫持
    init: function () {
      var _this = this;

      for (const key in _this.data) {
        Object.defineProperty(_this, key, {
          // 当使用 model.a 访问数据就被劫持
          get: function () {
            return _this.data[key];
          },
          set: function (newVal) {
            _this.data[key] = newVal;
            // 去进行更新视图的渲染
            view.render({
              [key]: newVal,
            });
          }
        });
      }
    }
  };

  // 视图层
  var view = {
    el: "#app",
    template: `
    <div>
        <span class="cla-a">{{ a }}</span>
        <span class="cla-s">{{ s }}</span>
        <span class="cla-b">{{ b }}</span>
        <span>=</span>
        <span class="cla-r">{{ r }}</span>
    </div>
    <div>
        <input type="text" placholder="数字a" class="cal-input a" />
        <input type="text" placholder="数字b" class="cal-input b" />
    </div>
    <div>
        <button class="cla-btn">+</button>
        <button class="cla-btn">-</button>
        <button class="cla-btn">*</button>
        <button class="cla-btn">/</button>
    </div>
    `,
    render: function (mutedData) {
      // 处理数据更改
      // 首次在 init 执行的时候就会执行这里
      if (!mutedData) {
        // 利用正则表达式去匹配模版中的 {{ xxx }}
        // 然后把匹配到的 {{ xxx }} 替换为 Model 层中真实的数据
        this.template = this.template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
          return model.data[key.trim()];
        });

        // 渲染到页面中
        var container = document.createElement("div");
        container.innerHTML = this.template;
        document.querySelector(this.el).appendChild(container);
      } else {
        // 遍历 Model 中的数据替换要更新的节点数据
        for (const key in mutedData) {
          document.querySelector(".cla-" + key).textContent = mutedData[key];
        }
      }
    }
  };

  // 控制层
  var controller = {
    init: function () {
      var oCalInputs = document.querySelectorAll(".cal-input"),
        	oBtns = document.querySelectorAll(".cla-btn"),
        	inputItem,
        	btnItem;

      // 给所有的输入框框绑定 input 事件
      for (let index = 0; index < oCalInputs.length; index++) {
        inputItem = oCalInputs[index];
        inputItem.addEventListener("input", this.handleInput, false);
      }

      // 给所有的按钮绑定 click 事件
      for (let index = 0; index < oBtns.length; index++) {
        btnItem = oBtns[index];
        btnItem.addEventListener("click", this.handleClick, false);
      }
      
    },
    // 处理表单输入
    handleInput: function (event) {
      var tar = event.target,
        	value = Number(tar.value),
        	field = tar.className.split(" ")[1]; // 拿到输入框的 a 和 b

      // 然后去操作 model 中对应的值，然后就会触发 set 机制，然后就去渲染 dom 
      model[field] = value;

      // ES3 的写法，和 model.r = xxx 一个意思
      // 详见MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with
      with (model) {
        r = eval("a" + s + "b");
      }
    },
    handleClick: function (event) {
      var type = event.target.textContent;
      model.s = type;
      
      with (model) {
        r = eval("a" + s + "b");
      }
    }
  };

  init();
})();