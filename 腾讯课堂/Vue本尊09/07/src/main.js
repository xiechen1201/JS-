import Vue from "vue";
import router from "./router";
import App from "./App.vue";

import "./assets/main.css";

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
