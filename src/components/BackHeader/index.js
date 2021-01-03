import React from "react";
import { withRouter } from "dva/router";
import { handleBackPage, handleIconFont } from "@/utils/common";

import "./style.less";

function BackHeader(props) {
  return (
    <header className={`${props.fixed && "back-header-fixed"} back-header`}>
      <div onClick={() => handleBackPage(props)}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={handleIconFont("fanhui")}></use>
        </svg>
        <span>歌手</span>
      </div>
    </header>
  );
}

export default withRouter(BackHeader);
