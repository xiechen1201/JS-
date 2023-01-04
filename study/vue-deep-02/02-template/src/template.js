import { createApp, h } from "vue/dist/vue.esm-bundler";

const Title = {
  template: "<h2>This is child component</h2>",
};

/* const App = {
  template: `<h1 class="title">{{ title }}</h1>`,
  data() {
    return {
      title: "this is my title",
    };
  },
}; */

const App = {
  render() {
    return h("div", {}, [h("h1", { class: "title" }, this.title), h("p", {}, "This is content"), h(Title)]);
  },
  components: {
    Title,
  },
  data() {
    return {
      title: "this is my title",
    };
  },
};

createApp(App).mount("#app");
