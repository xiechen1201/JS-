import MyBadge from "./MyBadge.vue";

export default {
  install(app, options) {
    app.component(MyBadge.name, MyBadge);
  }
};
