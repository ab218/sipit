import React from 'react';
import Slider from 'react-slick';
import { withStyles } from '@material-ui/core/styles';
import styles from './slickCarouselStyles';

const SimpleSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
  };
  const { businessData, classes } = props;
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
