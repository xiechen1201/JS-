import axios from "axios";
import qs from "qs";
import { JUHE_APP_KEY } from "@/configs/keys";

function axiosPost(options) {
  axios({
    url: options.url,
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      ...options.data,
      key: JUHE_APP_KEY,
    }),
  })
    .then((res) => {
      options.success(res.data);
    })
    .catch((err) => {
      options.error(err);
    });
}

function axiosGet(options) {
  axios({
    url: options.url,
    method: "get",
    params: qs.stringify({
      ...options.data,
      key: JUHE_APP_KEY,
    }),
  })
    .then((res) => {
      options.success(res.data);
    })
    .catch((err) => {
      options.error(err);
    });
}

export { axiosPost, axiosGet };
