import React, { Component, Fragment } from "react";
import { getBanner } from "@/api/Home";

import RecommendWrap from "./recommend.jsx";
import RecommendedNav from "./RecommendedNav/index";
import Banner from "@/components/Banner";

export default class SectionWraper extends Component {
  state = {
    bannerData: []
  };
  componentDidMount() {
    getBanner().then(res => {
      const { banners } = res;
      this.setState({
        bannerData: banners
      });
    });
  }
  render() {
    console.log(this.props, "pp");
    const { bannerData } = this.state;
    return (
      <Fragment>
        {/* bannerData.length 异步请求数据会拉之后，再开始加载渲染banner轮播，否则会有加载问题造成自动轮播失效 */}
        {bannerData.length && <Banner bannerData={bannerData}></Banner>}
        <RecommendedNav />
        <RecommendWrap />
      </Fragment>
    );
  }
}
