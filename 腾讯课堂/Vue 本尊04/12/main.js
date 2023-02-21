const { createApp } = window.Vue;

const app = {
  template: `
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" name="content" />
      <button type="submit">Submit</button>
    </form>
    <button @click.once="doOnce">Once</button>
   </div>`,
  data() {
    return {
      count: 0
    };
  },
  methods: {
    onSubmit(e) {
      // 事件处理相关的程序是非纯逻辑的，onSubmit 内应该只负责纯逻辑的，例如更改数据
      // 希望你把非纯逻辑的代码分离出去
      // e.preventDefault()
      console.log(123);
    },
    doOnce() {
      console.log(123);
    }
  }
};

createApp(app).mount("#app");
