import { handleIconFont } from "@/utils/common";

const SongPlayNav = ({ songDetail = {}, handleBack }) => {
  return (
    <nav className="song-play-nav padding">
      <div className="song-play-nav-left">
        <svg onClick={handleBack} className="icon" aria-hidden="true">
          <use xlinkHref={handleIconFont("zuobianjiantou")}></use>
        </svg>
      </div>
      <div className="song-play-nav-center p-t-10">
        <h3>{songDetail?.name || ""}</h3>
        <span>
          {songDetail?.ar[0]?.name || ""}
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={handleIconFont("xiangyou")}></use>
          </svg>
        </span>
      </div>
      <div className="song-play-nav-right">
        <svg className="icon p-r-10" aria-hidden="true">
          <use xlinkHref={handleIconFont("live")}></use>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={handleIconFont("fenxiang")}></use>
        </svg>
      </div>
    </nav>
  );
};

export default SongPlayNav;
