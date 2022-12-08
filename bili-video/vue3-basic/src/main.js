import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/js/common.js";
import "@/assets/css/resets.css";
import "@/assets/css/border.css";

/**
 * CompositionAPI 针对 Vue 框架（组合API）
 * 把很多的功能进行拆分，最后进行组合，形成 CompositionAPI 的框架设计模式
 * 把 OptionsAPI 的选项变成了 Vue 上的一个方法（hook钩子）
 * Vue 上实现了许多的方法进行导出，开发者进行导入
 *
 * OptionsAPI 就是一个对象上有很多的属性，CompositionAPI 是由于多个 hook 组成的框架
 *  */

// createApp 创建一个 Vue 实例
// mount 挂在 DOM 节点
createApp(App).use(router).use(store).mount("#app");
