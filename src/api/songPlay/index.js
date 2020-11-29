import axios from "../api";

export const getSongPlayDetail = params => {
  return axios({
    url: "/song/url",
    method: "get",
    params,
    withCredentials: true
  });
};

export const toggleStarTheSong = (musicId, like) => {
  return axios.get("/like", {
    params: {
      id: musicId,
      like
    },
    withCredentials: true
  });
};

export const getSongLyric = params => {
  return axios({
    url: "/lyric",
    method: "get",
    params
  });
};
