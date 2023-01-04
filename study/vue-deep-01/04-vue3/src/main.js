/* import { createApp } from "vue/dist/vue.esm-bundler";
const Article = {
  template: `
    <div class="article">{{ title }}</div>
    <div class="article" v-bind:title="content">{{ content }}</div>
    <TodoList />
    `,
  data() {
    return {
      title: "this is a title",
      author: "xiechen",
      date: "2022/12/28 18:00:00",
      content: "this is Content",
    };
  },
};
createApp(Article).mount("#app"); */

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TodoList from "./components/TodoList.vue";

const app = createApp(App);
app.component("TodoList", TodoList);
app.mount("#app");
