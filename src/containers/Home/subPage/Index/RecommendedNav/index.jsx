import React, { Component } from "react";
import { Link } from "dva/router";
import { handleIconFont } from "@/utils/common";
import recommendedData from "./util";
import "./style.less";

class Recommended extends Component {
  state = {
    recommendedData
  };
  render() {
    const { recommendedData } = this.state;
    return (
      <div className="recommended-wrap hidden-scrollbar">
        <div className="recommended-wrap-ul">
          {recommendedData &&
            recommendedData.map(item => {
              return (
                <Link key={item.id} to={item.path}>
                  <div>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={handleIconFont(item.iconfont)}></use>
                    </svg>
                  </div>
                  <p>{item.title}</p>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Recommended;
