import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends Component {
  render() {
    const { starRating } = this.props;
    return (
      <div style={{ fontSize: 24 }}>
        <StarRatingComponent
          name="app6"
          starColor="#ffb400"
          emptyStarColor="#ffb400"
          value={starRating}
          renderStarIcon={(index, value) => (
            <span>
              <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
            </span>
          )}
          renderStarIconHalf={() => (
            <span>
              <span style={{ position: 'absolute' }}><i className="far fa-star" /></span>
              <span><i className="fas fa-star-half" /></span>
            </span>
          )}
        />
      </div>

    );
  }
}

export default Stars;
