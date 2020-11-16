import axios from "../api";

/**
 * 获取主页轮播图的api
 *
 */
export const getToplistDetail = () => {
  return axios({
    method: "get",
    url: "/toplist/detail"
  });
};
