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

    const { cafeData } = this.props;
    return (
      <Slider {...settings}>
        {cafeData.photos.map((sub, subindex) => (
          <div key={subindex}>
            <img style={{ maxHeight: '30em' }} src={sub} />
          </div>
        ))}
      </Slider>
    );
  }
}
