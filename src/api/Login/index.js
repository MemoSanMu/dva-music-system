import axios from "../api";

/**
 * 登录 - 手机
 *
 */
export const login = params => {
  return axios({
    method: "post",
    url: `/login/cellphone`,
    params,
    withCredentials: true
  });
};
