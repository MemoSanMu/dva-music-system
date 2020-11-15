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
          <i className="icon iconfont icon-bofang"></i>
        </span>
        <span>
          <strong className="p-l-10">播发全部</strong>
          <span className="fontGreyClolr vertical-text-top">{` (共${trackCount}首)`}</span>
        </span>
      </div>
      <div className="list-nav-bgr">
        <span>
          <i className="icon iconfont icon-jia"></i>
        </span>
        <span className="p-l-10 vertical-text-top">
          {`收藏(${subscribedCount} 万)`}
        </span>
      </div>
    </nav>
  )
}