import React from 'react';
import Slider from 'react-slick';
import { withStyles } from '@material-ui/core/styles';
import styles from './slickCarouselStyles';

const SimpleSlider = ({ businessData, classes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    arrows: false,
  };
  return (
    <Slider
      {...settings}
    >
      {businessData.photos.map((sub, subindex) => (
        <div key={sub}>
          <img alt={subindex} className={classes.img} src={sub} />
        </div>
      ))}
    </Slider>
  );
};

export default withStyles(styles)(SimpleSlider);
