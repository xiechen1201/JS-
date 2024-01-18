import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$get = (url) => {
  return new Promise((resolve) => {
    resolve(url);
  });
};
app.mount("#app");
