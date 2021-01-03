import React, { useState, useEffect, useRef } from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";
import BetterScroll from "better-scroll";
import { debounce } from "@/utils/common";
import sinerNameSpace from "@/models/singer/nameSpace";

import "./style.less";

const limit = 100;
let myBScrolll;

function Singer({ getSingerList, singerData, history }) {
  const singerBsWraper = useRef();
  const singerContent = useRef();
  const [bsWrapperHeight, setBsWrapperHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getSingerList({ limit });
  }, []);

  const mountBS = () => {
    myBScrolll = new BetterScroll(".singer-bs-wraper", {
      pullUpLoad: true,
      // scrollbar: true,
      scrollY: true,
      click: true,
      bounce: true
      // and so on
    });
  };

  const unmountBS = () => myBScrolll && myBScrolll.destroy(); // 组件销毁 卸载BScroll

  useEffect(() => {
    singerData && mountBS();
    singerBsWraper && setBsWrapperHeight(singerBsWraper.current.clientHeight);
    if (singerContent) {
      const slider = [...singerContent.current.children];
      const slideOffsetTop = slider.map(item => item.offsetTop);
      myBScrolll &&
        myBScrolll.on(
          "scroll",
          debounce(e => {
            const currentIndex = slideOffsetTop.findIndex(s => s > Math.abs(e.y));
            setCurrentIndex(currentIndex === -1 ? 0 : currentIndex - 1);
          }, 100)
        );
    }
    return unmountBS;
  }, [singerData]);

  // 点击右侧边栏处理滚动
  const handleScrollToElement = i => {
    myBScrolll.scrollToElement([...singerContent.current.children][i], 1000);
    setCurrentIndex(i);
  };

  // 点击歌手到详情页面
  const handleSingerDetail = ({ id }) => {
    history.push(`/singer/${id}`);
  };

  return (
    <div className="singer-bs-wraper" ref={singerBsWraper}>
      <section className="slider-bs-content font-grey-clolr" ref={singerContent}>
        {singerData &&
          singerData.map(objs => {
            const keys = Object.keys(objs)[0];
            return (
              <div className="bs-slider-content" key={keys}>
                <h6 className="bs-header">{keys}</h6>
                <ul>
                  {objs[keys] &&
                    objs[keys].map(item => {
                      return (
                        <li key={item.id} className="bs-slider" onClick={() => handleSingerDetail(item)}>
                          <img src={item.img1v1Url} alt="" className="bs-slider-avatar" />
                          <span className="bs-slider-name">{item.name}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </section>
      <div className="singer-side-navigation">
        {singerData &&
          singerData.map((objs, index) => {
            const keys = Object.keys(objs)[0];
            return (
              <span
                key={keys}
                className={currentIndex === index ? "current-slide" : ""}
                style={{ lineHeight: bsWrapperHeight / singerData.length + "px" }}
                onClick={() => {
                  handleScrollToElement(index);
                }}
              >
                {keys}
              </span>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    singerData: state[sinerNameSpace].singerData
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSingerList: params => dispatch({ type: `${sinerNameSpace}/getSingerData`, payload: params })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Singer));
