import React, { Component } from 'react';
import { WingBlank, Carousel } from 'antd-mobile'
import './style.css'

class Banner extends Component {

  state = {
    imgHeight: 176
  }
  
  render() {
    const { imgHeight } = this.state;
    const { bannerData } = this.props;
    return (
      <WingBlank>
        <Carousel
          autoplay
          infinite
          dotActiveStyle={{ backgroundColor: '#f50' }}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {bannerData && bannerData.map((val) => (
            <a
              key={val.encodeId}
              href={val.url}
              style={{ display: 'inline-block', width: '100%', height: imgHeight, position: 'relative' }}
            >
              <img
                src={val.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  // window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              <span className="banner-w-tag-title" style={{ backgroundColor: val.titleColor === 'blue' ? '#2db7f5' : '#f50' }} >{ val.typeTitle }</span>
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner;
