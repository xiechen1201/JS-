import Vue from "vue";

const App = {
  data() {
    return {
      list: [
        {
          id: 1,
          value: "item-1"
        },
        {
          id: 2,
          value: "item-2"
        },
        {
          id: 3,
          value: "item-3"
        }
      ],
      isLogin: false
    };
  },
  methods: {
    delteItem(index) {
      this.list.splice(index, 1);
    }
  },
  template: `
    <ul>
        <li v-for="(item, index) of list" :key="item.id">
            <span>{{ item.value }}</span>
            <input type="text" />
            <button @click="delteItem(index)">Del</button>
        </li>
    </ul>
  `
};

new Vue({
  render: (h) => h(App)
}).$mount("#app");

/*  <div>
    
  </div> */

/*  <div>
    <div v-if="isLogin">
        <span>欢迎</span>
        <a href="javascript:;" @click="isLogin = false">xiechen</a>
    </div>
    <div v-else>
        <a href="javascript:;" @click="isLogin = true">登录</a>
        <a href="javascript:;">注册</a>
    </div>
  </div> */
