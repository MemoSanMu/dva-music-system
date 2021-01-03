import React, { Component, Fragment } from "react";
import { getRecommendSongList } from "@/api/Home";
import RecommendedTemplate from "@/components/RecommendedTemplate";

export default class RecommendWrap extends Component {
  state = {
    config: {
      title: "人气歌单推荐",
      information: "查看更多",
      isShowIcon: false
    },
    recommendData: []
  };
  componentDidMount() {
    getRecommendSongList().then(({ result }) => {
      this.setState({ recommendData: result });
    });
  }
  render() {
    const { config, recommendData } = this.state;
    return (
      <Fragment>
        <RecommendedTemplate config={config} sourceData={recommendData} />
      </Fragment>
    );
  }
}
