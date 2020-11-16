import React, { Component } from "react";
import { InputItem } from "antd-mobile";
import "./style.less";

class Header extends Component {
  render() {
    return (
      <header className="header-wrap fontGreyClolr">
        <div>
          <i className="icon iconfont icon-maikefeng"></i>{" "}
        </div>
        <div className="header-w-m">
          <div className="header-w-m-search">
            <i className="icon iconfont icon-search"></i>
            <InputItem className="header-w-m-i" type="text" placeholder="大家都在搜"></InputItem>
          </div>
        </div>
        <div className="header-w-r">
          <img className="header-w-r-img" src={require("../../assets/yay.jpg")} alt="" />
        </div>
      </header>
    );
  }
}

export default Header;
