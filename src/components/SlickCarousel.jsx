import React from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
    };

    const { businessData } = this.props;
    return (
      <Slider {...settings}>
        {businessData.photos.map((sub, subindex) => (
          <div key={sub}>
            <img alt={subindex} style={{ maxHeight: '30em' }} src={sub} />
          </div>
        ))}
      </Slider>
    );
  }
}
