import { http } from "@/libs";
import { IRoute } from "@/typings";
import qs from "qs";

function getUserRouteList(uid: number) {
  return http
    .post(
      "/api/user_router_list",
      qs.stringify({
        uid
      })
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
}

export { getUserRouteList };
