import React, { Component } from "react";
import { handleIconFont } from "@/utils/common";
import { InputItem } from "antd-mobile";
import "./style.less";

class Header extends Component {
  render() {
    return (
      <header className="header-wrap font-grey-clolr">
        <div>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={handleIconFont("maikefeng")}></use>
          </svg>
        </div>
        <div className="header-w-m">
          <div className="header-w-m-search">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={handleIconFont("search")}></use>
            </svg>
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
