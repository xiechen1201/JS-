import { IRoute } from "@/typings";
import { IState } from "./state";
import { SET_ROUTE_TREE, SET_AUTH } from "./actionsTypes";

export default {
  [SET_ROUTE_TREE](state: IState, routeList: IRoute[]) {
    state.routeTree = routeList;
  },
  [SET_AUTH](state: IState, auth: boolean) {
    state.hasAuth = auth;
  }
};
