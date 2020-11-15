
import namespace from './nameSpace';
import { getPlayListDetail } from '@/api/PlayListDetail'
import { setSessionStorage } from '@/utils/storage'

const defaultState = {
  topListDetial: null,
  songDetail: null
};

const topListDetailStore = {

  namespace,

  state: defaultState,

  effects: {
    *initTopListDetail({ payload }, { call, put }) {
      const { code, playlist } = yield getPlayListDetail(payload);
      yield put({ type: 'saveInfo', topListDetial: playlist });
    },
    *saveSongDetail({ payload }, { call, put }) {
      setSessionStorage('songDetail', payload)
      yield put({ type: 'saveInfo', songDetail: payload });
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

export default topListDetailStore
