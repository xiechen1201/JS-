const { createApp, mount } = window.Vue;

const MyUser = {
  template: `
  <div style="float: left;">
    <a href="#">登录</a>
    <span> | </span>
    <a href="#">注册</a>
  </div>`,
};

const NavItem = {
  template: `
  <li style="float: left; padding: 0 15px;">
    <a :href="item.link" target="_blank">{{ item.title }}</a>
  </li>`,
  props: ["item"]
};

const MyNav = {
  template: `
  <ul style="float: left; padding: 0 35px; margin: 0; list-style: none;">
    <nav-item v-for="item in navData" :key="item.id" :item="item" />
  </ul>`,
  props: ["navData"],
  components: {
    NavItem
  }
};

const MyLogo = {
  template: `<div style="float: left; padding: 0 20px;">Logo</div>`
};

const MyHeader = {
  template: `
  <header style="border: 1px solid #333;">
    <my-logo />
    <my-nav :nav-data="navData" />
    <my-user />
    <div style="clear: both;"></div>
  </header>`,
  // 注册数据属性
  props: ["navData"],
  components: {
    MyLogo,
    MyNav,
    MyUser
  }
};

const App = {
  template: `
  <div>
    <!-- 使用组件 -->
    <!-- 父组件给子组件传递数据 -->
    <my-header :nav-data="navData" />
    <!-- 复用组件，相互独立 -->
    <my-header :nav-data="navData" />
  </div>`,
  components: {
    // 注册组件，这样的方式叫做局部注册
    // 局部注册：在组件内部的局部注册另外一个组件，只供当前组件使用
    MyHeader
  },
  data() {
    return {
      navData: [
        {
          id: 1,
          title: "百度",
          link: "https:www.baidu.com"
        },
        {
          id: 2,
          title: "谷歌",
          link: "https:www.google.com"
        },
        {
          id: 3,
          title: "必应",
          link: "https:www.bing.com"
        }
      ]
    };
  }
};

createApp(App).mount("#app");
