const { createApp, ref } = Vue;

const App = {
  template: `
    <h1>{{ msg }}</h1>
    <button @click="change">按钮</button>
  `,
  /* data() {
    return {
      msg: "Hello Vue data",
    };
  }, */
  setup() {
    const msg = ref("Hello Vue Ref");
    const change = function () {
      msg.value = "Hello Vue Event";
    };

    return {
      msg,
      change,
    };
  },
};

createApp(App).mount("#app");
