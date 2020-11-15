import axios from '../api';


export const getSongPlayDetail = (params) => {
  return axios({
    url: '/song/url',
    method: 'get',
    params,
    withCredentials: true,
  })
}

export const toggleStarTheSong = (musicId, like) => axios.get('/like', {
  params: {
    id: musicId,
    like,
  },
  withCredentials: true,
});
