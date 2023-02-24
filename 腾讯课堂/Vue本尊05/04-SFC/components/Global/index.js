import Search from "./Search/index.vue";

function globalComponent(app) {
  app.component("my-search", Search);
}

export default globalComponent;