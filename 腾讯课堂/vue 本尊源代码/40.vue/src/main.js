import App from './App';
import App2 from './App2';
import App3 from './App3';

/**
 * 渲染函数
 * 
 * render函数 
 * 
 * -> 虚拟DOM -> 真实DOM
 * 
 * 组件 -> 模板(字符串) -> 编译模板
 * 
 * -> AST树 -> 进行优化 -> 虚拟DOM 
 * -> 渲染函数 -> 真实DOM
 * 
 * patch -> {  }
 * span -> 234 -> 345 -> 更新真实DOM
 */ 

/**
 * h函数 -> createNodeDescrition -> 创建节点描述 
 *      -> VNode -> Virtual Node -> 虚拟节点
 *      -> 多个虚拟节点 -> 虚拟DOM树
 *      -> 对真实DOM树的描述
 * 
 *      -> 返回虚拟节点 -> 对真实节点的描述
 * 
 * h函数的参数：
 *    component
 *    节点的描述
 */

// new Vue({
//   // render: h => h(App)

//   render (h) {
//     return h(App);
//   }
// }).$mount('#app');

/**
 <div class="app">
    <div class="article-box">
      <h1 class="title">{{ title }}</h1>
      <p>{{ author }} - <span class="date-time">{{ dateTime }}</span></p>
      <p class="content">{{ content }}</p>
    </div>
  </div>
 */

const { createApp, h } = Vue;

// const app = createApp(App);

const app = createApp(App);
const app2 = createApp(App2);
const app3 = createApp(App3);

app.mount('#app');
app2.mount('#app2');
app3.mount('#app3');

// <span>
//   <span>123  <span>234</span></span>
// </span>

// span.innerHTML = <span>123  <span>345</span></span>

// {
//   'span',
//   {},
//   '234'
// }

// span.innerText !== '123' && (span.innerText = a);

/**
 * <template>
  <div class="app">
    <!-- <div class="article-box">
      <h1 class="title">{{ title }}</h1>
      <p>{{ author }} - <span class="date-time">{{ dateTime }}</span></p>
      <p class="content">{{ content }}</p>
    </div> -->
    <h1 v-if="level === 1">
      <slot>h1</slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot>h2</slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot>h3</slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot>h4</slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot>h5</slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot>h6</slot>
    </h6>

  </div>
</template>
 * 
 */