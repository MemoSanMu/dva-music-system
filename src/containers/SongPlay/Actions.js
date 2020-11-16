import React, { Component } from "react";
import { handleIconFont, handleZeroFilling } from "@/utils/common";
import PropTypes from "prop-types";

class Actions extends Component {
  // 处理歌曲时长
  formatSecond = time => {
    const second = Math.floor(time % 60);
    let minite = Math.floor(time / 60);
    return `${handleZeroFilling(minite)}:${handleZeroFilling(second)}`;
  };

  render() {
    const { handleSongPlay, isPlay, allTime, changeTime, currentTime } = this.props;
    const playIcon = isPlay ? "zanting" : "bofang1";
    return (
      <section className="song-play-actions-wrap">
        <div className="actions-top fontGreyClolr">
          <i className={handleIconFont("aixin")}></i>
          <i className={handleIconFont("download")}></i>
          <i className={handleIconFont("changge")}></i>
          <i className={handleIconFont("pinglun")}></i>
          <i className={handleIconFont("gengduo")}></i>

          {/* 字幕页的icon */}
          {/* <i className={handleIconFont('yinle-')}></i>
            <i className={handleIconFont('gengduo1')}></i> */}
        </div>
        <div className="actions-progress padding p-t-10">
          <span>{this.formatSecond(currentTime)}</span>
          <input
            className="lcmf-range"
            type="range"
            step="0.01"
            max={allTime} // 总时长
            onChange={changeTime}
            value={currentTime} // 当前播放节点时长
          />
          <span>{this.formatSecond(allTime)}</span>
        </div>
        <div className="actions-bottom fontGreyClolr p-t-20">
          {/* 切换播放顺讯 */}
          {/* <i className={handleIconFont('danquxunhuan')}></i>
          <i className={handleIconFont('ziyuan')}></i> */}

          <i className={handleIconFont("liebiaoxunhuan")}></i>
          <i className={handleIconFont("shangyiqu101")}></i>
          <i onClick={handleSongPlay} className={`setting-font-lg ${handleIconFont(playIcon)}`}></i>
          <i className={handleIconFont("xiayiqu101")}></i>
          <i className={handleIconFont("bofangliebiao")}></i>
        </div>
      </section>
    );
  }
}

Actions.propTypes = {
  handleSongPlay: PropTypes.func,
  changeTime: PropTypes.func,
  isPlay: PropTypes.bool,
  allTime: PropTypes.number,
  currentTime: PropTypes.any
};

export default Actions;
