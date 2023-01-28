(function () {
  function init() {
    model.init(); // 组织数据，监听数据（数据代理）
    view.render(); // 组织 HTML 模版 + 渲染 HTML 模版
    controller.init(); // 事件处理函数的定义和绑定
  }

  // 数据层
  var model = {
    // 管理数据
    data: {
      a: 0,
      b: 0,
      s: "+",
      r: 0,
    },
    // 对数据进行劫持
    init: function () {
      var _this = this;

      for (const key in _this.data) {
        (function (key) {
          Object.defineProperty(_this, key, {
            // model.a 访问就被劫持
            get: function () {
              return _this.data[key];
            },
            set: function (newVal) {
              _this.data[key] = newVal;

              // 进行更新渲染
              view.render({
                [key]: newVal,
              });
            },
          });
        })(key);
      }
    },
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
      if (!mutedData) {
        this.template = this.template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
          return model.data[key.trim()];
        });

        var container = document.createElement("div");
        container.innerHTML = this.template;
        document.querySelector(this.el).appendChild(container);
      } else {
        for (const key in mutedData) {
          document.querySelector(".cla-" + key).textContent = mutedData[key];
        }
      }
    },
  };

  // 控制层
  var controller = {
    init: function () {
      var oCalInputs = document.querySelectorAll(".cal-input"),
        oBtns = document.querySelectorAll(".cla-btn"),
        inputItem,
        btnItem;

      for (let index = 0; index < oCalInputs.length; index++) {
        inputItem = oCalInputs[index];
        inputItem.addEventListener("input", this.handleInput, false);
      }

      for (let index = 0; index < oBtns.length; index++) {
        btnItem = oBtns[index];
        btnItem.addEventListener("click", this.handleClick, false);
      }
    },
    // 处理表单输入
    handleInput: function (event) {
      var tar = event.target,
        value = Number(tar.value),
        field = tar.className.split(" ")[1];

      model[field] = value;

      // ES3 的写法
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
    },
  };

  init();
})();
