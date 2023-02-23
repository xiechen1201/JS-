import App from './App';
import { globalProperties } from './shared';

// console.log(Vue);

// Vue.prototype.$http = function () {
//   console.log('http');
// }

const app = Vue.createApp(App);

app.use(globalProperties);

// // app.provide

// app.config.globalProperties.$http = function () {
//   console.log('http');
// }

// app.config.globalProperties.a = 123;
// app.config.globalProperties.b = 345;

app.mount('#app');

// Vue -> Vue.prototype

// const app = new Vue({
//   render: h => h(App)
// }).$mount('#app');

// console.log(app);
