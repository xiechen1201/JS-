import Vue from "vue";
import App from "./App.vue";

import "./assets/main.css";

Vue.prototype.utils = {
  $http: function(){}
};

const app = new Vue({
  render: (h) => h(App)
}).$mount("#app");

console.log(app)