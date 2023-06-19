const { createApp } = window.Vue;

const app = {
  /* // 绑定 JS 表达式（不推荐）
  template: `
    <div>
        <h1>{{ count }}</h1>
        <button @click="count += 1">Add</button>
        <button @click="count -= 1">Minus</button>
    </div>`, */

  /* // 绑定处理函数
  template: `
    <div>
        <h1>{{ count }}</h1>
        <!-- 这里不会执行 methods 的方法，调用的目的是为了传递参数 -->
        <button @click="onClickAdd(2)">Add</button>
        <button @click="onClickMinus(2, $event)">Minus</button>
    </div>`, */
    
  // 多个事件处理函数绑定
  template: `
    <div>
        <h1>{{ count }}</h1>
        <button @click="onClickAdd(),setLog()">Add</button>
        <button @click="onClickMinus">Minus</button>
    </div>`,
  data() {
    return {
      count: 0
    };
  },
  methods: {
    onClickAdd($event) {
      // ...
    },
    onClickMinus() {
      // ...
    },
    setLog() {}
  }
};

createApp(app).mount("#app");
