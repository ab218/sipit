import React from 'react';
import Slider from 'react-slick';
import styles from './slickCarouselStyles';

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
    };

    const { businessData } = this.props;
    const { img } = styles;
    return (
      <Slider {...settings}>
        {businessData.photos.map((sub, subindex) => (
          <div key={sub}>
            <img alt={subindex} style={img} src={sub} />
          </div>
        ))}
      </Slider>
    );
  }
}
