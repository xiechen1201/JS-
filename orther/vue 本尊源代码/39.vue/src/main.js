import App from './App';
import MyUI from './libs/MyUI';
import testMixin from './mixins/test';

const app = Vue.createApp(App);

// 全局注册
app.mixin(testMixin);

app.use(MyUI);

app.mount('#app');