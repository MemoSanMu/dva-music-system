import React, { Component } from "react";
import { withRouter } from "dva/router";
import { connect } from "dva";
import topListDetail from "@/models/topListDetail/nameSpace";
import { transformation } from "@/utils/common";
import ListNav from "./ListNav";
import ListItem from "./ListItem";
import Loading from "@/components/Loading";
import "./style.less";

const mapStateToProps = (state, ownProps) => {
  return {
    topListDetial: state[topListDetail].topListDetial,
    loading: state.loading.global
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initTopListDetail: payload => {
      dispatch({ type: `${topListDetail}/initTopListDetail`, payload });
    },
    saveSongDetail: payload => {
      dispatch({ type: `${topListDetail}/saveSongDetail`, payload });
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class TopListDetail extends Component {
  componentDidMount() {
    this.initDetail();
  }
  initDetail = () => {
    const {
      location: { pathname },
      initTopListDetail
    } = this.props;
    const pathArr = pathname.split("/");
    const id = pathArr[pathArr.length - 1];
    const params = {
      id,
      timer: new Date().getTime()
    };
    initTopListDetail(params);
  };
  handleSongPlay = item => {
    const { history, saveSongDetail } = this.props;
    saveSongDetail(item);
    const { id } = item;
    history.push(`/songPlay/${id}`);
  };
  render() {
    const { topListDetial, loading } = this.props;
    const isList = topListDetial && topListDetial?.tracks && topListDetial?.trackIds && topListDetial.tracks.length;
    return (
      <div className="top-list-detail-wraper">
        <Loading isShow={loading} />
        <section className="top-list-d-top-bg self-adaption" style={{ backgroundImage: `url(${topListDetial?.coverImgUrl})` }}>
          <div className="top-list-d-top-bg-content">
            <p>最近更新于：</p>
            {/* <i>icon 待完善 定位至中心位置</i> */}
          </div>
        </section>
        <section className="top-list-d-bottom-list">
          {topListDetial && <ListNav trackCount={topListDetial.trackCount} subscribedCount={transformation(topListDetial.subscribedCount, 10000)} />}
          {isList && <ListItem List={topListDetial.tracks} trackIds={topListDetial.trackIds} handleSongPlay={this.handleSongPlay} />}
        </section>
      </div>
    );
  }
}

// :to="{name: 'Song', query: {name: item.name, singers: formatSinger(item.ar), id:item.id}, params: {coverImgUrl: item.al.picUrl}}"

export default withRouter(TopListDetail);
