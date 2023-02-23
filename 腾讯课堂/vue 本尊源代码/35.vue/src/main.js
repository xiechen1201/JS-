import App from './App';
import { myShow } from './directives';

const app = Vue.createApp(App);

// 自定义指令的全局注册
const myShowDirective = app.directive('myShow', myShow);
// 应用实例
// console.log(myShowDirective);

app.mount('#app');

// Vue.createApp(App).directive('myShow', myShow).mount('#app');

/**
 * 自定义指令
 * 内置指令
 * 
 * 指令：控制视图的一种继承方式
 * DOM有关
 * 
 * 接口：直接对DOM的操作的底层行为
 */

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
