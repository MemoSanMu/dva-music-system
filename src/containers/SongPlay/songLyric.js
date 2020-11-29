/*
 * @Author: your name
 * @Date: 2020-11-28 15:23:38
 * @LastEditTime: 2020-11-29 20:46:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music-player-in-vue/Users/wangsen/sunshine/dva-music-system/src/containers/SongPlay/songLyric.js
 */
import React, { Component } from "react";
import { handleIconFont } from "@/utils/common";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

class songLyric extends Component {
  constructor(props) {
    super(props);
    this.songLyricWrapper = React.createRef();
    this.state = {
      lyricList: [],
      mySwiper: null
    };
  }

  componentDidMount() {
    const { songLyricDetail } = this.props;
    let lyricList = [];
    if (songLyricDetail?.lyric) {
      songLyricDetail["lyric"].split(/[\n]/).forEach(item => {
        let temp = item.split(/\[(.+?)\]/);
        temp.length &&
          lyricList.push({
            time: temp[1],
            lyc: temp[2]
          });
      });
      lyricList = lyricList.filter(v => v["lyc"]);
      this.setState(
        {
          lyricList
        },
        () => {
          this.songLyricWrapper.current?.clientHeight && this.initSwiper();
        }
      );
    }
  }
  initSwiper = () => {
    // 动态set slide 显示个数（根据屏幕高度自适应字体高度上下间距）
    const slidesPerView = Number((this.songLyricWrapper.current.clientHeight / 25).toFixed());
    const mySwiper = new Swiper(".swiper-container", {
      // autoplay: true,//可选选项，自动滑动
      direction: "vertical", // 垂直滚动
      slidesPerView: slidesPerView, // 显示数量
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      centeredSlides: true // 当前项居中
    });
    this.setState({ mySwiper });
  };

  format(value) {
    // 时间转换
    if (!value) return "";
    let interval = Math.floor(value);
    let minute = Math.floor(interval / 60)
      .toString()
      .padStart(2, "0");
    let second = (interval % 60).toString().padStart(2, "0");
    return `${minute}:${second}`;
  }

  render() {
    const { isMuted, volume, currentTime, toggleContent, changeVolume, songLyricDetail } = this.props;
    const { lyricList, mySwiper } = this.state;
    const process = this.format(currentTime);
    const index = lyricList.findIndex(item => item.time > process) - 1;
    if (mySwiper && mySwiper instanceof Swiper) {
      mySwiper.slideTo(index);
    }
    return (
      <div className={`song-lyric-wrapper ${!toggleContent ? "visible" : ""}`}>
        <div className="song-play-volume padding">
          <svg onClick={this.onMuteAudio} className="icon" aria-hidden="true">
            <use xlinkHref={handleIconFont(isMuted ? "jingyin" : "yinliang")}></use>
          </svg>
          <input className="lcmf-range" type="range" onChange={changeVolume} value={isMuted ? 0 : volume} />
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={handleIconFont("touping")}></use>
          </svg>
        </div>
        <div className="song-play-lyric" ref={this.songLyricWrapper}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {lyricList &&
                lyricList.map(({ time, lyc }, ind) => {
                  // ${index === ind && "swiper-slide-active"}
                  return (
                    <div key={`${time}${lyc}`} className={`swiper-slide song-play-lyc-slide`}>
                      {lyc}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default songLyric;
