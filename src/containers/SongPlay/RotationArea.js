import { handleIconFont } from "@/utils/common";

const RotationArea = ({ info: { picUrl }, isPlay, handleLike, isLike, toggleContent }) => {
  const isTurn = isPlay ? "" : "pause";
  return (
    <div className={`${toggleContent ? "visible" : "hidden"} song-play-rotate-wraper`}>
      <div className="song-play-rotate-content">
        <div className="song-play-rotate-content-needle">
          <div>
            <img className={isPlay ? "" : "pause"} src={require("../../assets/ic_needle.png")} alt="" />
          </div>
        </div>
        <div className={`song-play-rotate-content-black-glue play ${isTurn}`}>
          <img src={picUrl} alt="" />
        </div>
      </div>
      <div className="actions-top fontGreyClolr">
        <svg className="icon" aria-hidden="true" onClick={handleLike}>
          <use xlinkHref={handleIconFont(isLike ? "aixin1" : "aixin")}></use>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={handleIconFont("download")}></use>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={handleIconFont("changge")}></use>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={handleIconFont("pinglun")}></use>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={handleIconFont("gengduo")}></use>
        </svg>
        {/* 字幕页的icon */}
        {/* <i className={handleIconFont('yinle-')}></i>
            <i className={handleIconFont('gengduo1')}></i> */}
      </div>
    </div>
  );
};
export default RotationArea;
