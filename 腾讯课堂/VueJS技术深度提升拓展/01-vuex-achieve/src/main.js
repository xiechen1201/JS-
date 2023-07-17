import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";

/* 

store = {
    install(app){

    }
}

createStore() 执行 => { install(app){} }
*/

createApp(App).use(store).mount("#app");
