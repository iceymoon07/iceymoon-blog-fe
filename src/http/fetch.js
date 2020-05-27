import axios from "axios";
import { Message } from "element-ui";

const fetch = axios.create({
  baseURL: "/api",
  timeout: 20000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

fetch.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

// 配置 axios 响应拦截器
fetch.interceptors.response.use(
  response => {
    return response.data;
  }, // 响应成功，返回响应主体
  error => {
    const { message } = error.response.data;
    if (typeof message === "string") {
      Message.error(message);
    } else {
      Message.error(message[0]);
    }
    return Promise.reject(error);
  } // 响应错误，通过 element-ui 弹出错误信息提示
);

export default fetch;
