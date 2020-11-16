import React, { Component } from "react";
import { Icon, Badge } from "antd-mobile";
import { getCookies } from "@/utils/common";
import { connect } from "dva";
import "./style.less";

const mapStateToProps = state => {
  return {
    userInfo: state["@login"].userInfo || getCookies("userInfo")
  };
};
@connect(mapStateToProps)
class Index extends Component {
  render() {
    const {
      userInfo: { profile }
    } = this.props;
    return (
      <div className="my-wrap">
        <div className="my-w-h">
          <dl>
            <dt>
              <img src={profile.avatarUrl} alt="" />
            </dt>
            <dd>
              <div className="my-w-h-dd-l">
                <h4>{profile.nickname}</h4>
                <div>
                  <Badge
                    text="VIP开通"
                    style={{
                      marginLeft: 12,
                      padding: "0 3px",
                      backgroundColor: "#21b68a",
                      borderRadius: 2
                    }}
                  />
                  <Badge
                    text="等级Lv.0"
                    style={{
                      marginLeft: 12,
                      padding: "0 3px",
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      color: "#f19736",
                      border: "1px solid #f19736"
                    }}
                  />
                </div>
              </div>
              <div>
                <Icon size="lg" type="right"></Icon>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Index;

// accountStatus: 0
// authStatus: 0
// authority: 0
// avatarDetail: null
// avatarImgId: 109951164574199940
// avatarImgIdStr: "109951164574199928"
// avatarImgId_str: "109951164574199928"
// avatarUrl: "https://p3.music.126.net/xIDxrboKUtllMLn6Z3zYMA==/109951164574199928.jpg"
// backgroundImgId: 109951162868128400
// backgroundImgIdStr: "109951162868128395"
// backgroundUrl: "https://p3.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg"
// birthday: -2209017600000
// city: 110101
// defaultAvatar: false
// description: ""
// detailDescription: ""
// djStatus: 0
// eventCount: 0
// expertTags: null
// experts: {}
// followed: false
// followeds: 0
// follows: 3
// gender: 1
// mutual: false
// nickname: "独家记忆叁"
// playlistBeSubscribedCount: 0
// playlistCount: 1
// province: 110000
// remarkName: null
// signature: ""
// userId: 1950453060
// userType: 0
// vipType: 0
