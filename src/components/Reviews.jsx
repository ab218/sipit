import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import RatingStar from './RatingStar';
import styles from './styles/reviewStyles';

class Reviews extends React.Component {
  render() {
    const { reviewsData } = this.props;
    const {
      reviewWrapper, title, reviewMain, imgStyle, reviewTitle, reviewContent, speechBubble,
    } = styles;
    return (
      <div style={reviewWrapper}>
        <div style={title}><h2 style={{ color: '#FFFF' }}>Yelp Reviews</h2></div>
        {
          reviewsData.reviews.map(review => (
            <div style={reviewMain} key={review.id}>
              <div style={reviewTitle}>
                <img style={imgStyle} alt={review.user.image_url} src={review.user.image_url} />
                <p style={{ marginRight: 'auto', padding: '1em' }}>{review.user.name}</p>
                <RatingStar starRating={review.rating} />
              </div>
              <div style={speechBubble} />
              <div style={reviewContent}>
                {review.text}
                <br />
                <br />
                <p style={{ color: 'green', float: 'right' }}>
                  {`posted: ${review.time_created}`}
                </p>
              </div>
              <br />
            </div>
          ))
        }
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviewsData: state.fetchBusinessData.reviewsData,
});

export default compose(
  connect(mapStateToProps, null),
)(Reviews);
