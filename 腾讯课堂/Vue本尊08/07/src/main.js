import Vue from "vue";
import App from "./App.vue";
import { MessageBox } from "./components/MyUI";

console.log(MessageBox)

Vue.use(MessageBox);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
