import { IState } from "@/store/state";
import { IRoute } from "@/typings";
import { RouteRecordRaw, Router } from "vue-router";
import { Store } from "vuex/types/index.js";

function generateRouter(routerTree: IRoute[]) {
  let newRoutes = routerTree.map((route) => {
    let _route: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      component: () => import(`@/views/${route.name}.vue`),
      children: []
    };

    if (route.children) {
      _route.children = generateRouter(route.children);
    }

    return _route;
  });

  return newRoutes;
}

export function routerBeforEach(router: Router, store: Store<IState>) {
  router.beforeEach(async (to, from, next) => {
    if (!store.state.hasAuth) {
      await store.dispatch("SET_ROUTE_TREE");
      const newRoutes = generateRouter(store.state.routeTree);

      newRoutes.forEach((el) => router.addRoute(el));
      next({ path: to.path, replace: true });
    } else {
      next();
    }
  });
}
