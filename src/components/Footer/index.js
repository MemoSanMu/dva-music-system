import React, { Component } from "react";
import { withRouter } from "dva/router";
import footerMockData from "./util";
import { handleIconFont } from "@/utils/common";

import "./style.less";

class Footer extends Component {
  state = {
    footerMockData,
    activeId: "001"
  };
  handleFooterSelect = ({ id, url }) => {
    this.setState({ activeId: id });
    const {
      history: { push }
    } = this.props;
    push(url);
  };
  render() {
    const { activeId, footerMockData } = this.state;
    return (
      <footer className="footer-wrap">
        <ul className="footer-wrap-ul">
          {footerMockData &&
            footerMockData.map(item => {
              return (
                <li
                  key={item.id}
                  className={`footer-wrap-ul-li ${activeId === item.id && "footer-active"}`}
                  onClick={() => this.handleFooterSelect(item)}
                >
                  <div>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={handleIconFont(item.iconfont)}></use>
                    </svg>
                    <p>{item.title}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </footer>
    );
  }
}

export default withRouter(Footer);
