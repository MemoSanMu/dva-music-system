
import namespace from './nameSpace';
import { Toast } from 'antd-mobile';
import { login } from '@/api/Login';
import { routerRedux } from 'dva/router';
import Cookies from 'js-cookie'

const defaultState = {
  userInfo: null,
  loginInfo: null
}

const loginStore = {

  namespace,

  state: defaultState,

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      let payload = ''
      history.listen(({ pathname }) => {
        payload = pathname
      })
      dispatch({
        type: 'loginhook',
        payload
      });
    },
  },

  effects: {
    *userLoginInfo({ payload }, { call, put }) {
      Cookies.set('loginInfo', payload)
      yield put({ type: 'saveInfo', loginInfo: payload });
    },
    *login({ payload }, { call, put }) {
      const responseData = yield login(payload)
      if (responseData.code === 200) {
        Toast.success('登录成功', 2)
        Cookies.set('userInfo', responseData)
        yield put({ type: 'saveInfo', userInfo: responseData });
        yield put(routerRedux.push('/'))
      } else {
        Toast.fail(responseData.msg, 2)
      }
    },
    *loginhook({ payload },{select,call, put}){
      const { userInfo } = yield select((state) => state['@login']);
      const cookieUserInfo = Cookies.get('userInfo')
      // redux 仓库 和cookies 都没有用户登录信息
      if (!userInfo && !cookieUserInfo) {
        yield put((routerRedux.push('/login')));
      } else {
        yield put((routerRedux.push(payload)));
      }
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

export default loginStore
