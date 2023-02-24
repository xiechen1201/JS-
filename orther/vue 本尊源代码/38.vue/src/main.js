import App from './App';

import { Modal } from './libs/MyUI';


// 应用实例
const app = Vue.createApp(App);

app.use(Modal);

// const app2 = Vue.createApp({
//   template: `<h1>Vue3 extend</h1>`
// })

// app2.mount('#title');

// // console.log(app);

// // 组件实例
app.mount('#app');

// console.log(appComponent);

// new Vue()

// Vue.extend

// 组件实例 -> 根组件的实例

// new Vue({
//   render: h => h(App)
// }).$mount('#app');

// const Title = Vue.extend({
//   template: `<h1>Vue.extend</h1>`
// });

// const titleComponent = new Title();

// titleComponent.$mount('#title');