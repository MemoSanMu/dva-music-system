import { handleIconFont } from "@/utils/common";
/**
 * @name: ListNav
 * @test: test font
 * @msg:
 * @param {*} trackCount
 * @param {*} subscribedCount
 * @return {*}
 */
export default ({ trackCount, subscribedCount }) => {
  return (
    <nav className="list-nav padding">
      <div>
        <span>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={handleIconFont("bofang")}></use>
          </svg>
        </span>
        <span>
          <strong className="p-l-10">播发全部</strong>
          <span className="font-grey-clolr vertical-text-top">{` (共${trackCount}首)`}</span>
        </span>
      </div>
      <div className="list-nav-bgr">
        <span>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={handleIconFont("jia")}></use>
          </svg>
        </span>
        <span className="p-l-10 vertical-text-top">{`收藏(${subscribedCount} 万)`}</span>
      </div>
    </nav>
  );
};
