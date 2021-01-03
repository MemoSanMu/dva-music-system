import React, { useState, useEffect, useRef } from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";
import sinerNameSpace from "@/models/singer/nameSpace";
import topListDetail from "@/models/topListDetail/nameSpace";

import BackHeader from "@/components/BackHeader";
// import ListNav from "@/containers/Home/subPage/TopListDetail/ListNav";
import ListItem from "@/containers/Home/subPage/TopListDetail/ListItem";

import "./style.less";

function Singer({ singerDetail, getSingerDetail, location: { pathname }, history, saveSongDetail }) {
  useEffect(() => {
    const pathArr = pathname.split("/");
    const id = pathArr[pathArr.length - 1];
    const params = {
      id
    };
    getSingerDetail(params);
  }, []);
  const handleSongPlay = item => {
    saveSongDetail(item);
    const { id } = item;
    history.push(`/songPlay/${id}`);
  };
  return (
    <main className="singer-detail-wrapper">
      <BackHeader fixed />
      <section className="top-list-d-top-bg self-adaption" style={{ backgroundImage: `url(${singerDetail?.artist?.img1v1Url})` }}></section>
      <section>
        {/* {topListDetial && <ListNav trackCount={topListDetial.trackCount} subscribedCount={transformation(topListDetial.subscribedCount, 10000)} />} */}
        {singerDetail && <ListItem List={singerDetail.hotSongs} trackIds={{}} handleSongPlay={handleSongPlay} />}
      </section>
    </main>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    singerDetail: state[sinerNameSpace].singerDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSingerDetail: payload => dispatch({ type: `${sinerNameSpace}/getSingerDetail`, payload }),
    saveSongDetail: payload => {
      dispatch({ type: `${topListDetail}/saveSongDetail`, payload });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Singer));
