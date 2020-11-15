
import namespace from './nameSpace';
import { getToplistDetail } from '@/api/TopList'

const defaultState = {
  toplist: [],
};

const topListStore = {

  namespace,

  state: defaultState,

  effects: {
    *initTopListData({ payload }, { call, put }) {
      const { list } = yield getToplistDetail(),
      officialList = list.slice(0, 4),
      recommendList = list.slice(4, 10),
      internationalList = list.slice(10, 16),
      moreList = list.slice(16);
      const toplist = [
        {
          title: '官方榜',
          vertical: '',
          id: 'top1',
          list: officialList
        },
        {
          title: '推荐榜',
          vertical: true,
          id: 'top2',
          list: recommendList
        },
        {
          title: '全球榜',
          vertical: true,
          id: 'top3',
          list: internationalList
        },
        {
          title: '更多榜单',
          vertical: true,
          id: 'top4',
          list: moreList
        },
      ]
      yield put({ type: 'saveInfo', toplist: toplist });
    },
  },

  reducers: {
    saveInfo(state, payload) {
      return {
        ...state,
        ...payload
      }
    },
  },

}

export default topListStore
