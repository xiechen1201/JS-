// import App from './App';

// const app = Vue.createApp(App);



// Vue.createApp -> 创建一个Vue的应用

// Vue.createApp(组件)
// Vue创建时组件的本质就是一个对象
// Vue.createApp({}) -> 根组件

// const App = {};

// Vue.createApp(App).mount('#app');

/**
 * 组件的注册
 * 
 * 全局祖册
 */

// app.component(组件名, 组件本身);
// const MyTitle = {
//   data,
//   methods,
//   ......
// };

// my-title -> kebab-case
// app.component('my-title', MyTitle)
// <my-title></my-title>

/**
 * 局部注册
 * 
 * export default {
 *   // PascalCase
 *   name: 'MyTitle'
//   data,
//   methods,
//   ......
// };
// <MyTitle></MyTitle>

   app.component('root', {
     components: {
       MyTitle
     },
     template: `<my-title></my-title>`
   })
 */

/**
 * Vue, 推荐组件名和使用组件时用的标签名尽量一致
 * 
 * PascalCase -> 有利于编辑器的代码补全
 *               JSX使用PascalCase进行标签书写
 * 
 * kebab-case -> 符合W3C对标签使用的规范 -> XHTML
 *               避免现有或将来的HTML标签的冲突  mytitle
 *               避免有一些大小写不敏感的文件系统，解析会出现问题
 * 
 * 双标签 -> 标准的HTML标签大多数都是双标签
 * 
 * 组件 -> DOM -> PascalCase -> HTML是不会正常处理
 * 
 */

// app.component('my-title', {
//   data () {
//     return {
//       title: 'This is my TITLE'
//     }
//   },
//   template: `
//     <h1>{{ title }}</h1>
//   `
// });

/**
 * <MyTitle />
 * <MyTitle></MyTitle>
 * <my-title></my-title>
 */

/**
 * 组件名称 -> 一律使用PascalCase -> Vue -> 组件被看做一个类的模式
 * MyTitle.vue
 */

//--------------------------------

// Vue.createApp -> 创建一个Vue的应用 -> 应用实例
// console.log(app);

/**
 * component: 全局注册组件
 * config：   应用配置
 * directive: 全局注册自定义指令
 * mixin: 全局注册混入器
 * mount: 挂载组件
 * provide: 注入全局跨组件层级的属性
 * use: 使用插件
 */

// app.component
/**
 * 可以用在任何新创建的组件实例模板中
 * 
 */
// 组件名，组件本身
// 递归组件

// 公共的组件库，可能使用在组件树中的很多组件中的组件
// 如果为了构建组件树所创建的所有组件都不适合使用全局注册

import MyTitle from './MyTitle';

var App = {
  components: {
    // 自定义组件标签名: 组件实例
    // 'MyTitle': MyTitle,
    // 'my-amazing-title': MyTitle,
    'MyAmazingTitle': MyTitle
  },
  template: `
    <div>
      <h1>This is ROOT</h1>
      <my-amazing-title></my-amazing-title>
    </div>
  `
}

const app = Vue.createApp(App);

// app.component('my-title', MyTitle);

 app.mount('#app');




