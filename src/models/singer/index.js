import namespace from "./nameSpace";
import { singerTopList, singerDetailList } from "@/api/Singer";
import pinyin from "pinyin";

const defaultState = {
  singerData: null, // 歌手排行
  singerDetail: null // 歌手歌单
};

const loginStore = {
  namespace,

  state: defaultState,

  subscriptions: {},

  effects: {
    *getSingerData({ payload }, { call, put }) {
      let singerData = [];
      const hot = "Hot";
      const { code, artists } = yield singerTopList(payload);
      if (code === 200 && artists && artists.length) {
        const letter = {};
        const asOwn = {}.hasOwnProperty;
        // 添加kes => [] 去重
        const hotSigner = {
          [hot]: artists.splice(0, 10) // hot 截取
        };
        artists
          .map(item => {
            const py = pinyin(item.name[0], {
              style: pinyin.STYLE_FIRST_LETTER
            });
            const key = py[0][0].toUpperCase();
            item.letterKey = key;
            if (!asOwn.call(letter, key)) letter[key] = [];
            return item;
          })
          .forEach(i => letter[i.letterKey].push(i));
        const sortResult = Object.entries(letter)
          .sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
          .map(i => ({ [i[0]]: i[1] }));
        singerData = [hotSigner, ...sortResult];
      }
      yield put({ type: "save", singerData });
    },
    *getSingerDetail({ payload }, { call, put }) {
      let singerDetail = null;
      const { code, artist, hotSongs } = yield singerDetailList(payload);
      singerDetail = code === 200 && { artist, hotSongs };
      yield put({ type: "save", singerDetail });
    }
  },

  reducers: {
    save(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

export default loginStore;
