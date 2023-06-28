import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export function httpGET(url) {
  return new Promise((resolve, reject) => {
    axios(url)
      .then((res) => {
        res.data.code === 0 ? resolve(res.data.data) : reject(res.data.msg);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function httpPOST(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        res.data.code === 0 ? resolve(res.data.data) : reject(res.data.msg);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
