import { createApp } from "vue";
import App from "./App.vue";
import MyUI from "./libs/MyUI";
/* import MyButton from "./libs/MyUI/MyButton";
import MyBadge from "./libs/MyUI/MyBadge"; */
import testMixin from "./mixins/test"

const app = createApp(App);

// 全局注册
app.use(MyUI);

// 按需注册
/* app.use(MyButton);
app.use(MyBadge); */

// 全局注册 mixin（不推荐）
// app.mixin(testMixin)

app.mount("#app");
