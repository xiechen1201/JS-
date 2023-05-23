import App from "./App";
// import vueLazyload from "vue-lazyload";
import vueLazyload from "../modules/vue-lazyload"

const app = Vue.createApp(App);
app.use(vueLazyload, {
  loading:
    "https://img0.baidu.com/it/u=2316172803,2733469627&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  error:
    "https://img0.baidu.com/it/u=3056754360,3938571717&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=354",
  preload: 1
});
app.mount("#app");
