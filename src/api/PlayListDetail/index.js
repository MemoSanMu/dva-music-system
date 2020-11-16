import axios from "../api";

export const getPlayListDetail = params => {
  return axios({
    url: "/playlist/detail",
    method: "get",
    params
  });
};
