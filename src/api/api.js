import axios from "axios";
// import errorHandler from "./errorHandle";

const baseURL = "http://localhost:3000/";

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL,
  timeout: 10000 // 请求超时时间
});

// request interceptor
request.interceptors.request.use(
  config => {
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    // config.headers.Authorization = `bearer ${token}`;
    return config;
  },
  err => {
    console.log(err, "errr handleerror");
  }
);

// axios.defaults.baseURL = ' http://meiyun.info:3000/';
request.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err?.response?.data)
);

// // response interceptor
// request.interceptors.response.use(response => {
//   const dataAxios = response.data;
//   // 这个状态码是和后端约定的
//   const { code } = dataAxios;
//   // 根据 code 进行判断
//   if (code === undefined) {
//     // 如果没有 code 代表这不是项目后端开发的接口
//     return dataAxios;
//     // eslint-disable-next-line no-else-return
//   } else {
//     // 有 code 代表这是一个后端接口 可以进行进一步的判断
//     switch (code) {
//       case 200:
//         // [ 示例 ] code === 200 代表没有错误
//         return dataAxios.data;
//       case "xxx":
//         // [ 示例 ] 其它和后台约定的 code
//         return "xxx";
//       default:
//         // 不是正确的 code
//         return "不是正确的code";
//     }
//   }
// }, errorHandler);

export default request;
