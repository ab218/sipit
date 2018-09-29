import React from 'react';
import Slider from 'react-slick';
import styles from './slickCarouselStyles';

const SimpleSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
  };
  const { businessData } = props;
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
};

export default SimpleSlider;
