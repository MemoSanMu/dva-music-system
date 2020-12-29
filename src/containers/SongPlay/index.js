import React, { Component } from "react";
import SongPlayDetail from "@/models/songPlay/nameSpace";
import topListDetail from "@/models/topListDetail/nameSpace";
import { getSessionStorage } from "@/utils/storage";
import { connect } from "dva";
import { withRouter } from "dva/router";
import SongPalNav from "./Nav";
import RotationArea from "./RotationArea";
import SongLyric from "./songLyric";
import Actions from "./Actions";
import { handleBackPage } from "@/utils/common";

import "./style.less";

const mapStateToProps = (state, ownProps) => {
  return {
    songPlayDetail: state[SongPlayDetail]?.songPlayDetail, // 单个音乐 含地址url
    songDetail: state[topListDetail]?.songDetail || getSessionStorage("songDetail"), // 单个音乐的其他信息
    songLyricDetail: state[SongPlayDetail]?.songLyricDetail || null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initSongPlayDetail: payload => {
      dispatch({ type: `${SongPlayDetail}/initSongPlayDetail`, payload });
    },
    initSongLyricDetail: payload => {
      dispatch({ type: `${SongPlayDetail}/initSongLyricDetail`, payload });
    }
  };
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class SongPlay extends Component {
  constructor(props) {
    super(props);
    this.audioElement = React.createRef(); // 初始化audio react节点
    this.state = {
      isPlay: true, // 是否播放
      allTime: 0, // 音乐总时长
      currentTime: 0, // 当前音乐播放时间
      isMuted: false, // 是否静音
      volume: 20, // 音量
      toggleContent: true, // 切换黑胶背景或者歌词内容
      isLike: false // 是否喜欢
    };
  }

  componentDidMount() {
    this.initDetail(); // 初始化获取页面Id
  }

  // 返回audio节点
  handleAudioElement = () => this.audioElement.current;

  initDetail = () => {
    const {
      location: { pathname },
      initSongPlayDetail,
      initSongLyricDetail
    } = this.props;
    const pathArr = pathname.split("/");
    const id = pathArr[pathArr.length - 1];
    const params = {
      id
    };
    initSongPlayDetail(params);
    initSongLyricDetail(params);
  };

  // 处理播放-暂停
  handleSongPlay = () => {
    const { isPlay } = this.state;
    const current = this.handleAudioElement();
    this.state.isPlay ? current.pause() : current.play();
    this.setState({ isPlay: !isPlay });
  };

  // 该视频已准备好开始播放
  onCanPlay = () => {
    const current = this.handleAudioElement();
    const { volume } = this.state;
    current.volume = volume / 100; // 准备就绪设置默认音量
    // 设置视频总时长
    this.setState({
      allTime: current.duration
    });
  };

  // 处理播放进度
  changeTime = e => {
    e.persist();
    const { value } = e.target;
    const current = this.handleAudioElement();
    this.setState({ currentTime: value });
    current.currentTime = value;
    // 如果播放的当前时间 等于 音乐的总时长 那么改变播放状态
    if (value === current.duration) {
      this.setState({
        isPlay: false,
        currentTime: 0
      });
    }
  };

  // 当前播放位置改变时执行
  onTimeUpdate = () => {
    const current = this.handleAudioElement();
    this.setState({
      currentTime: current.currentTime
    });
    // 如果播放的当前时间 等于 音乐的总时长 那么改变播放状态
    if (current.currentTime === current.duration) {
      this.setState({
        isPlay: false,
        currentTime: 0
      });
    }
  };

  // 返回
  handleBack = () => handleBackPage(this.props);

  // 音量调节
  changeVolume = e => {
    e.persist();
    const { value } = e.target;
    const current = this.handleAudioElement();
    current.volume = value / 100;

    this.setState({
      volume: value,
      isMuted: !value
    });
  };

  // 静音操作
  onMuteAudio = () => {
    const current = this.handleAudioElement();
    this.setState({
      isMuted: !current.muted
    });
    current.muted = !current.muted;
  };

  // 处理喜欢
  handleLike = () => {
    this.setState(preState => {
      const { isLike } = preState;
      return { isLike: !isLike };
    });
  };

  // 处理点击切换展示歌词、黑胶背景内容
  handleToggleContent = () => {
    this.setState(({ toggleContent }) => ({ toggleContent: !toggleContent }));
  };

  render() {
    const { songPlayDetail, songDetail, songLyricDetail } = this.props;
    const { isPlay, allTime, currentTime, isMuted, volume, isLike, toggleContent } = this.state;
    const isAl = songDetail?.al;
    const lyricProps = { isMuted, volume, currentTime, toggleContent, changeVolume: this.changeVolume, songLyricDetail };
    return (
      // style={{ backgroundImage: `url(${songDetail?.al.picUrl}) center` }}
      <main className="song-play-container">
        {songPlayDetail && songPlayDetail.length && (
          <audio
            className="song-play-audio"
            src={songPlayDetail[0]?.url}
            autoPlay={true}
            ref={this.audioElement}
            onCanPlay={this.onCanPlay} // 控制播放音乐时长
            onTimeUpdate={this.onTimeUpdate} // 控制进度
          >
            您的浏览器不支持 audio 标签。
            {/* <track src={songPlayDetail[0]?.url} kind="captions" /> */}
          </audio>
        )}
        {songDetail && <SongPalNav songDetail={songDetail} handleBack={this.handleBack} />}
        <section className="song-play-toggle-content" onClick={this.handleToggleContent}>
          {isAl && <RotationArea info={songDetail.al} isPlay={isPlay} isLike={isLike} handleLike={this.handleLike} toggleContent={toggleContent} />}
          {songLyricDetail && <SongLyric {...lyricProps} />}
        </section>
        <Actions handleSongPlay={this.handleSongPlay} isPlay={isPlay} allTime={allTime} currentTime={currentTime} changeTime={this.changeTime} />
      </main>
    );
  }
}

export default SongPlay;
