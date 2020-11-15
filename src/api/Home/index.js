import axios from '../api'

/**
 * 获取主页轮播图的api
 *
 */
export const getBanner = () => {
  return axios({
    method: 'get',
    url: '/banner'
  })
}

/**
 * 获取主页推荐歌单的api
 *
 */
export const getRecommendSongList = (data = {}) => {
  return axios({
    method: 'get',
    url: '/personalized',
    params: data
  })
}
