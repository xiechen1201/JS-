const { createApp } = window.Vue;

const App = {
  template: `
    <h1>{{ studentCountInfo }}</h1>
    <h1>{{ studentCountInfo }}</h1>
    <button @click="clickBtn">按钮</button>
    <button @click="clickBtn2">按钮</button>
  `,
  data() {
    return {
      studentCount: 1
    };
  },
  computed: {
    studentCountInfo() {
      console.log("Invoked");
      return this.studentCount > 0 ? "学生数量：" + this.studentCount : "暂无学生";
    },
    sym() {
      /* ... */
    },
    result: {
      get() {},
      set() {}
    }
  },
  methods: {
    clickBtn() {
      this.studentCount = new Date();
    },
    clickBtn2() {
      this.studentCount = 2;
    },
  }
};

const vm = createApp(App).mount("#app");
console.log(vm);