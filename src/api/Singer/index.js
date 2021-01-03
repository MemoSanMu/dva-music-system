// /top/artists?limit=100
import axios from "../api";

/**
 * 获取歌手
 *
 */
export const singerTopList = params => {
  return axios({
    method: "get",
    url: `/top/artists`,
    params
  });
};

/**
 * 获取歌手-详情
 *
 */
export const singerDetailList = params => {
  return axios({
    method: "get",
    url: `/artists`,
    params
  });
};
