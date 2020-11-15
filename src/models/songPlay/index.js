
import namespace from './nameSpace';
import { getSongPlayDetail } from '@/api/songPlay'

const defaultState = {
  songPlayDetail: null,
};

const SongPlayDetailStore = {

  namespace,

  state: defaultState,

  effects: {
    *initSongPlayDetail({ payload }, { call, put }) {
      const { code, data } = yield getSongPlayDetail(payload);
      yield put({ type: 'saveInfo', songPlayDetail: data });
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

export default SongPlayDetailStore
