import { defineAsyncComponent } from "vue";
import Loding from "./Loding.vue";
import Error from "./Error.vue";

// 按需加载
/* export const Intro = defineAsyncComponent(() => import("./Intro.vue"));
export const Article = defineAsyncComponent(() => import("./Article.vue"));
export const List = defineAsyncComponent(() => import("./List.vue")); */

// 按需加载
/* export const Intro = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(import("./Intro.vue"));
    }, 1000);
  });
});

export const Article = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(import("./Article.vue"));
    }, 2000);
  });
});

export const List = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(import("./List.vue"));
    }, 3000);
  });
}); */

// 按需加载
export const Intro = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(function () {
        resolve(import("./Intro.vue"));
      }, 1000);
    }),
  loadingComponent: Loding,
  errorComponent: Error
});

export const Article = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(import("./Article.vue"));
    }, 2000);
  });
});

export const List = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(import("./List.vue"));
    }, 3000);
  });
});
