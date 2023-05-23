import MyBadge from "./MyBadge/MyBadge.vue";
import MyButton from "./MyButton/MyButton.vue";

export default {
  install(app, options) {
    app.component(MyBadge.name, MyBadge);
    app.component(MyButton.name, MyButton);

    app.config.globalProperties.myUI = {
      add() {
        console.log("This is global method");
      }
    };

    // 如果组件内需要一些方法
    /* 
        Vue2 的写法:
        VueElement.prototype.myUI.$MyBadge = {
            add() {}
        };
        组件内部：this.myUI.$MyBadge.add()
    */

    /* 
        Vue3 的写法：
        app.config.globalProperties.myUI = {
            add() {}
        };
        组件内部：this.myUI.$MyBadge.add()
    */
  }
};
