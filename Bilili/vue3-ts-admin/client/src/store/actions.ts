import { Commit } from "vuex/types/index.js";
import { SET_ROUTE_TREE, SET_AUTH } from "./actionsTypes";
import { IState } from "./state";
import { getUserRouteList } from "@/services";
import { IRoute } from "@/typings";
import { formatRouteTree } from "@/libs";

export default {
  async [SET_ROUTE_TREE]({ commit, state }: { commit: Commit; state: IState }) {
    const routeList = (await getUserRouteList(state.uid)) as unknown as IRoute[];
    const routeTree = formatRouteTree(routeList);

    commit(SET_ROUTE_TREE, routeTree);
    commit(SET_AUTH, true);
  }
};
