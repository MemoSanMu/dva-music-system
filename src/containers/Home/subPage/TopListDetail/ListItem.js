import { handleIconFont } from "@/utils/common";

/**
 * @name: 排行榜列表
 * @test: test font
 * @msg:
 * @param {*}
 * @return {*}
 */
export default ({ List, trackIds, handleSongPlay }) => {
  return (
    <ul className="padding top-list-d-item">
      {List.map((item, ind) => {
        const index = ind + 1;
        const indexCount = index < 10 ? `0${index}` : index;
        return (
          <li key={item.id} onClick={() => handleSongPlay(item)}>
            <div className="t-l-d-i-l">
              <div className="list-ranking-left">
                <h6>{indexCount}</h6>
                <p className="setting-font-small">
                  {trackIds[ind]?.ratio ? (
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={handleIconFont("xiangshang")}></use>
                    </svg>
                  ) : (
                    "-"
                  )}
                  {`${trackIds[ind]?.ratio || trackIds[ind]?.lr || ""}%`}
                </p>
              </div>
              <div className="list-song-info">
                <h5 className="font-grey-clolr line-ellipsis">{item.name}</h5>
                <p className="line-ellipsis p-t-10">{`${item.ar[0].name} - ${item.name}`}</p>
              </div>
            </div>
            <div className="t-l-d-i-r">
              <svg className="icon p-r-10" aria-hidden="true">
                <use xlinkHref={handleIconFont("bofang-top-list")}></use>
              </svg>
              <svg className="icon p-r-10" aria-hidden="true">
                <use xlinkHref={handleIconFont("gengduo")}></use>
              </svg>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
