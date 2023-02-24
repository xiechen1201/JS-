import App from './App';

import MyUI from './libs/MyUI';

// import MyButton from './libs/MyUI/MyButton';
// import MyBadge from './libs/MyUI/MyBadge';

// const myUIComponents = [
//   MyButton,
//   MyBadge
// ]

const app = Vue.createApp(App);

/**
 * app -> component directive  mixin config
 * 
 */

app.use(MyUI);

// app.use(MyButton);

// myUIComponents.forEach(c => app.use(c));

const appComponent = app.mount('#app'); // app组件的实例

appComponent.test1();
/**
 * install
 * 
 * use
 * 
 * app.use(Modal, { a: 1 }) -> install(app, options) {
 *   app.component(Modal.name, Modal);
 * 
 *   
 * 
 *   app.directive
 * }
 * 
 * app.component
 * app.directive
 * app.mixin
 * 
 * new Vue
 * 
 * Vue.use(Modal, { a: 1 }) -> install(Vue, options) {
 * 
 * }
 * 
 * Vue.component
 * Vue.directive
 * Vue.mixin
 * 
 * 
 */