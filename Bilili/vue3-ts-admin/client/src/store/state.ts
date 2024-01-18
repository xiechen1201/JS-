import { IRoute } from "@/typings";

export interface IState {
  uid: number; // 用户ID
  hasAuth: boolean; // 是否已经登录
  routeTree: IRoute[]; // 路由列表
}

export default {
  uid: 1,
  hasAuth: false,
  routeTree: []
};
