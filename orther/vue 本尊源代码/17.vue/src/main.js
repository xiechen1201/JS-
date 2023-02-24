import Vue from 'vue';

const MyComponent = {
  props: {
    num: Number
  },
  template: `
    <span>{{ num }}</span>
  `
}

const App = {
  components: {
    MyComponent
  },
  data () {
    return {
      list: [
        {
          id: 1,
          value: 'item-1'
        },
        {
          id: 2,
          value: 'item-2'
        },
        {
          id: 3,
          value: 'item-3'
        },
      ],
      tempArr: [1,2,3],
      isLogin: false
    }
  },
  template: `
    <div>
      <ul>
        <li v-for="(item, index) of list" :id="item.id" :key="index">
          <span>{{ item.value }}</span>
          <input type="text" />
          <button @click="deleteItem(index)">DELETE</button>
        </li>
      </ul>
      <div
        v-if="isLogin"
      >
        <span>欢迎</span>
        <a href="#">Xiaoyesensen</a>
      </div>
      <div
        v-else
      >
        <a href="javascript:;" @click="isLogin = true">登录</a>
        <a href="#">注册</a>
      </div>
    </div>
  `,
  /**
   * item-2 DELETE -> 'item-3' -> 'item-2' -> DELETE item-3 li
   * 
   */
  methods: {
    deleteItem (index) {
      this.list.splice(index, 1);
    }
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app');
