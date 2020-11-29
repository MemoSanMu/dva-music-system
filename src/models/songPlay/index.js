import namespace from "./nameSpace";
import { getSongPlayDetail, getSongLyric } from "@/api/songPlay";

const defaultState = {
  songPlayDetail: null,
  songLyricDetail: null
};

const SongPlayDetailStore = {
  namespace,

  state: defaultState,

  effects: {
    *initSongPlayDetail({ payload }, { call, put }) {
      const { code, data } = yield getSongPlayDetail(payload);
      if (code === 200) yield put({ type: "saveInfo", songPlayDetail: data });
    },
    *initSongLyricDetail({ payload }, { call, put }) {
      const { code, lrc } = yield getSongLyric(payload);
      if (code === 200) yield put({ type: "saveInfo", songLyricDetail: lrc });
    }
  },

  reducers: {
    saveInfo(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

export default SongPlayDetailStore;
