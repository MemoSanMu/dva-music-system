import React, { Component } from "react";
import { connect } from "dva";
import topList from "@/models/topList/nameSpace";
import Official from "./official";
// getPlayListDetail
const mapStateToProps = (state, ownProps) => {
  return {
    toplist: state[topList].toplist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initTopListData: () => dispatch({ type: `${topList}/initTopListData` })
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class TopList extends Component {
  componentDidMount() {
    const { initTopListData } = this.props;
    initTopListData();
  }
  render() {
    const { toplist } = this.props;
    return <Official toplist={toplist} />;
  }
}
export default TopList;
