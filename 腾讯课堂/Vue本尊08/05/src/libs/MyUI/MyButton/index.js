import MyButton from "./MyButton.vue";

export default {
  install(app, options) {
    app.component(MyButton.name, MyButton);
  }
};
