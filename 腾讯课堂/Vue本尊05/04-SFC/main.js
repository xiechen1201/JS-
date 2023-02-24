// import "../libs/vue.global";
// const { createApp, mount } = window.Vue;

import { createApp } from "vue";
import globalComponent from "./components/Global/index";
import App from "./App.vue";

const app = createApp(App);

globalComponent(app);
app.mount("#app");
