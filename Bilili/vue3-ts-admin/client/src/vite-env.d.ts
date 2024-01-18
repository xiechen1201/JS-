/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

declare module "vuex" {
  export * from "vuex/types/index.d.ts";
  export * from "vuex/types/helpers.d.ts";
  export * from "vuex/types/logger.d.ts";
  export * from "vuex/types/vue.d.ts";
}
