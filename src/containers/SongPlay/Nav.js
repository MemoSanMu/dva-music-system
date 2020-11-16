const SongPlayNav = ({ songDetail = {}, handleBack }) => {
  return (
    <nav className="song-play-nav padding">
      <div className="song-play-nav-left">
        <i onClick={handleBack} className="icon iconfont icon-xiangzuo"></i>
      </div>
      <div className="song-play-nav-center p-t-10">
        <h3>{songDetail?.name || ""}</h3>
        <span>
          {songDetail?.ar[0]?.name || ""} <i className="icon iconfont icon-xiangyou"></i>
        </span>
      </div>
      <div className="song-play-nav-right">
        <i className="icon iconfont icon-live p-r-10"></i>
        <i className="icon iconfont icon-fenxiang"></i>
      </div>
    </nav>
  );
};

export default SongPlayNav;
