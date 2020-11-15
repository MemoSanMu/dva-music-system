import React, { Component } from 'react';
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import { Button, Icon, List, InputItem, WingBlank, WhiteSpace, Toast, Checkbox } from 'antd-mobile';
import { getCookies, handleBackPage } from '@/utils/common'
import { createForm } from 'rc-form';

import './style.less'

const renderHeader = (handleRouteHistory) => {
  return (
    <div onClick={ handleRouteHistory } className="render-header">
      <Icon type="left"></Icon>
      <button>手机号登录</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state['@login']?.userInfo,
    loginInfo: state['@login']?.loginInfo || getCookies('loginInfo')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginInfo: (info) => dispatch({ type: '@login/userLoginInfo', payload: info }),
    login: (payload) => dispatch({ type: '@login/login', payload })
  }
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {

  state = {
    rememberChecked: false
  }

  handleRouteHistory = () => handleBackPage(this.props)

  validatePhone = (rule, value, callback) => {
    if (value && value.length===13) {
      callback();
    } else if(value.length===0){
      callback(new Error('请输入电话号码'));
    } else {
      callback(new Error('电话号码不合法'));
    }
  }

  validatePassword = (rule, value, callback) => {
    if (value && value.length >=8) {
      callback();
    } else if(value.length===0){
      callback(new Error('请输入密码'));
    } else {
      callback(new Error('请输入至少8位密码'));
    }
  }

  componentDidMount () {
    // const { updateUserUid } = this.props
    // updateUserUid(22)
  }

  handleLogin = () => {
    const { form: { validateFields }, login } = this.props
    validateFields((err, params) => {
      if (!err) {
        if(this.state.checked) this.handleUserPW()
        params.password = encodeURIComponent(params.password)
        params.phone = params.phone.replace(/\s/g, '')
        const requestParams = Object.assign(params, { timer: new Date().getTime() })
        login(requestParams)
      } else {
        const { password, phone } = err
        const passwordError = (password && password.errors) || ''
        const phoneeError = (phone && phone.errors) || ''
        const errMsg = JSON.stringify(`${passwordError}${phoneeError}`, null, 2)
        Toast.fail(errMsg, 2)
      }
    })
  }
  
  // 处理用户是否记住密码
  handleRememberPW = ({ target: { checked } }) => {
    this.setState({ rememberChecked: checked })
    checked ? this.handleUserPW() : this.handleClearUserPW()
  }

  // 记住密码
  handleUserPW = () => {
    const { form: { getFieldValue }, userLoginInfo } = this.props
    const phone = getFieldValue('phone')
    const password = getFieldValue('password')
    if (phone && password) {
      const loginInfo = { phone, password }
      userLoginInfo(loginInfo)
    }
  }

  // 清除记住密码
  handleClearUserPW = () => {
    const { userLoginInfo } = this.props
    const loginInfo = { phone: '', password: '' }
    userLoginInfo(loginInfo)
  }

  render() {
    const { form: { getFieldProps, getFieldError }, loginInfo } = this.props;
    const { handleRouteHistory, handleLogin,  validatePhone, validatePassword } = this
    return (
      <div className="login-container">
        <header className="login-header">
          登录
        </header>
        <List renderHeader={ renderHeader(handleRouteHistory) }>
          <WingBlank>
            <InputItem
                {...getFieldProps('phone', {
                    initialValue: loginInfo?.phone || '',
                    rules: [
                    { validator: validatePhone},
                    ],
                })}
                error={!!getFieldError('phone')}
                onErrorClick={() => Toast.info(getFieldError('phone'), 1) }
                clear
                type="phone"
                placeholder="请输入手机号码"
                >
                <span>电话号码</span>
            </InputItem>
            <InputItem
              {...getFieldProps('password', {
                initialValue: loginInfo?.password || '',
                rules: [
                  { validator: validatePassword },
                  ],
                })}
                error={!!getFieldError('password')}
                onErrorClick={() => Toast.info(getFieldError('password'), 1) }
                clear
                type="password"
                placeholder="请输入密码"
              >
              <span>用户密码</span>
            </InputItem>
            <Checkbox.CheckboxItem onChange={this.handleRememberPW}>记住密码</Checkbox.CheckboxItem>
            <WhiteSpace />
            <Button type="warning" onClick={ handleLogin }>登录</Button>
          </WingBlank>
        </List>
      </div>
    )
  }
}

export default createForm()(Login);
