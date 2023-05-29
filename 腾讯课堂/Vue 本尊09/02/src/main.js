import {
  createApp,
  h,
  resolveComponent,
  resolveDynamicComponent,
  defineAsyncComponent,
  resolveDirective,
  withDirectives
} from "vue";
import App from "./App.vue";
import VModel from "./components/VModel.vue";
import VSlot from "./components/VSlot.vue";

// createApp(App).mount("#app");

const Comp1 = defineAsyncComponent(() => import("./components/Comp1.vue"));
const Comp2 = defineAsyncComponent(() => import("./components/Comp2.vue"));

const app = createApp({
  data() {
    return {
      isOpen: true,
      currentComponentName: "Comp1"
    };
  },
  computed: {
    currentComponent() {
      return this.currentComponentName === "Comp1" ? Comp1 : Comp2;
    }
  },
  render: function () {
    // 一般写法
    /* return h("h1", null, "This is title"); */

    // 没有 props 或者 attrs 可以进行省略
    /* return h("h1", "This is title"); */

    // 多个 children，不要使用同一个虚拟节点
    // 这样会重复使用 vNode，虽然能渲染，但是更新的时候会存在问题
    /* const vNode = h("li",null,"123");
    return h('div',null,[
      vNode,
      vNode
    ]) */

    // 推荐这样操作
    /* return h('ul',null,Array.from({length:6}).map((el,index)=>{
     return  h('li',null,index)
    })) */

    // 当你用 h 函数渲染一个全局组件的时候，但是又拿不到该组件的实例，你需要使用resolveComponent 来把组件名称进行解析
    // resolveComponent 接收一个组件名称
    // 如果你组件内注册了组件，你可以直接把组件的实例传递给 h 函数
    /* return h(resolveComponent("MyTest")); */

    // 使用 v-if
    // 无法使用 vue 的指令，所以需要使用原生的 JS 去模拟
    /* if(this.isOpen){
      return h('h1',null,"This is title.")
    }
    return h('h2',null,"This is article.") */

    // 使用 v-show
    /* return h(
      "h1",
      {
        style: {
          display: this.isOpen ? "none" : ""
        }
      },
      "This is title."
    ); */

    // 使用 v-for
    /* const title = ["编号", "姓名", "年龄"];
    const ids = ["1", "张三", "30"];

    return h(
      "table",
      {
        border: 1,
        width: 500
      },
      [
        h(
          "tr",
          null,
          title.map((el) => h("th", null, el))
        ),
        h(
          "tr",
          null,
          ids.map((el) => h("td", null, el))
        )
      ]
    ); */

    // v-model 和 v-on
    // onUpdate:username 必须按照这个写法写
    // 如果有修饰符：onClickPasssive、onKeyupOnce
    /* return h(VModel, {
      username: "default username",
      password: "default password",
      "onUpdate:username": (value) => console.log(value),
      "onUpdate:password": (value) => console.log(value),
      onSubmit: (value) => console.log(value)
    }); */

    // 使用插槽
    /* return h(VSlot, null, {
      default: () => "This is title",
      author: () => "Xiechen",
      content: (props) => h("p", null, props.content)
    }); */

    // 动态组件
    /* const dComponent = resolveDynamicComponent(this.currentComponent);
    return h("div", null, [
      h(dComponent),
      h("button", {
        onClick: () => {
          this.currentComponentName = this.currentComponentName === "Comp1" ? "Comp2" : "Comp1"
        }
      },"Switch Component")
    ]); */

    // 自定义指令
    // <div v-pin:top.animate="200"></div>
    const pin = resolveDirective("pin");
    return withDirectives(h("div"), [[pin, 200, "top", { animate: true }]]);

    // JSX 语法：
    // https://github.com/vuejs/babel-plugin-jsx
  }
});

app.component("MyTest", {
  render: () => h("div", null, "This is MyTest content.")
});

app.mount("#app");
