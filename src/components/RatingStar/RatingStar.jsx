import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from './ratingStarStyles';

const Stars = (props) => {
  const { starRating } = props;
  const { starSize, starPosition } = styles;
  return (
    <div style={starSize}>
      <StarRatingComponent
        name="app6"
        starColor="#ffb400"
        emptyStarColor="#ffb400"
        value={starRating}
        renderStarIcon={(index, value) => (
          <span><i className={index <= value ? 'fas fa-star' : 'far fa-star'} /></span>
        )}
        renderStarIconHalf={() => (
          <span>
            <span style={starPosition}><i className="far fa-star" /></span>
            <span><i className="fas fa-star-half" /></span>
          </span>
        )}
      />
    </div>

  );
};

export default Stars;
