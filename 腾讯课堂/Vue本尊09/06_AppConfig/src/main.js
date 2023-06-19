import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);
app.config.globalProperties.msg = "Hello world."
app.mount("#app");

