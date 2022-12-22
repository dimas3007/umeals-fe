import axios from "axios";
import { baseUrl } from "./env";

const apiClient = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

apiClient.defaults.withCredentials = true;
// apiClient.defaults.headers["Authorization"] = "foo bar";

// apiClient.interceptors.request.use(
//   function (request) {
//     request.headers["Content-Type"] = "multipart/form-data";
//     return request;
//   },
//   null,
//   { synchronous: true }
// );

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // let res = error.response;
    // if (res.status == 401 || res.status == 419) {
    //   window.location.href = "https://example.com/login";
    // }
    return Promise.reject(error);
  }
);

export default apiClient;
