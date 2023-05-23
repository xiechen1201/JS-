import { createApp } from "vue";
import App from "./App.vue";
import { myShow, myIf } from "./directives/index";

const app = createApp(App);
app.directive("my-show", myShow);
app.directive("my-if", myIf);
app.mount("#app");