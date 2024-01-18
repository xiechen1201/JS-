import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code !== 0) {
      return Promise.reject(response.data); // 返回接口返回的错误信息
    }

    return response.data.data;
  },
  (err) => Promise.reject(err)
);

export default axios;
