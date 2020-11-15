import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { lazyLoading } from '@/utils/lazyLoading'

const Index = () => import('@/containers')
const Login = () => import('@/containers/Login')
const SongPlay = () => import('@/containers/SongPlay')

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
          {/* 默认路由,匹配时跳转到/home  实现路由重定向*/}
          <Route exact path="/" render={ () => <Redirect to="/home" /> } />
          <Route path="/home" component={ lazyLoading(Index) } />
          <Route path="/songPlay" component={ lazyLoading(SongPlay) } />
          <Route path="/login" component={ lazyLoading(Login) } />
          <Redirect path="*" to="/home" />
      </Switch>
    </Router>
  );
}

export default RouterConfig
