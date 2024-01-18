import { createApp } from "vue";
import App from "./App.vue";
import "./assets/resets.css"
import store from "./store";
import router from "./router";
import { routerBeforEach } from "./router/route";

routerBeforEach(router, store);

createApp(App).use(store).use(router).mount("#app");
