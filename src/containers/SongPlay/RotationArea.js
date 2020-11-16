const RotationArea = ({ info: { picUrl }, isPlay }) => {
  const isTurn = isPlay ? "" : "pause";
  return (
    <section className="song-play-rotate-wrap">
      <div className={`song-play-rotate-wrap-bg play ${isTurn}`}>
        <img src={picUrl} alt="" />
      </div>
      <div className="song-play-rotate-wrap-needle">
        <div>
          <img className={isPlay ? "" : "pause"} src={require("../../assets/ic_needle.png")} alt="" />
        </div>
      </div>
    </section>
  );
};
export default RotationArea;
