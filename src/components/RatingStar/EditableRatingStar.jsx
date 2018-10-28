import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from './ratingStarStyles';

class EditableStars extends React.Component {
  render() {
    const { rating, onStarClick } = this.props;
    const { starSize } = styles;
    return (
      <div style={starSize}>
        <StarRatingComponent
          name="app6"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>

    );
  }
}

export default EditableStars;
