import MyHeader from "./components/MyHeader/index.js"

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

export default App;