import { createApp } from "vue";
import Modal from "./Modal.vue";

export default {
  install(app, options) {
    const modal = createApp(Modal);
    const oFrage = document.createDocumentFragment();

    const $model = modal.mount(oFrage);
    app.config.globalProperties.$modal = $model;
  }
};
