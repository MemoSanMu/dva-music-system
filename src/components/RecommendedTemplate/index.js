import React, { Component } from "react";
import { handleIconFont } from "@/utils/common";
import PropTypes from "prop-types";
import "./style.less";

export default class RecommendedTemplate extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    sourceData: PropTypes.array.isRequired
  };
  render() {
    const { config, sourceData } = this.props;
    return (
      <div className="recommended-template-wrapper">
        <div className="r-t-w-head">
          <h4 className="r-t-w-head-l">{config.title}</h4>
          <div className="r-t-w-head-r">
            {config.isShowIcon && (
              <svg className="icon" aria-hidden="true">
                <use xlinkHref={handleIconFont("bofang-info")}></use>
              </svg>
            )}
            <span>{config.information}</span>
          </div>
        </div>
        <ul className="r-t-w-body">
          {sourceData &&
            sourceData.map(item => {
              return (
                <li key={item.id} className="r-t-w-b-li">
                  <dl>
                    <dt>
                      <img src={item.picUrl} alt="" />
                    </dt>
                    <dd>
                      <span className="text-ellipsis">{item.name}</span>
                    </dd>
                  </dl>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
