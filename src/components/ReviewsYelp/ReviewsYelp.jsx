import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RatingStar } from '..';
import styles from './reviewsYelpStyles';

const ReviewsYelp = (props) => {
  const { yelpReviewsData, yelpReviewsDataLoading } = props;
  const {
    reviewWrapper, title, reviewMain, imgStyle, reviewTitle, loading,
    reviewContent, reviewUsername, reviewPostedTime, speechBubble,
  } = styles;

  if (yelpReviewsDataLoading) {
    return <h1 style={loading}>Brewing reviews ...</h1>;
  }

  return (
    <div style={reviewWrapper}>
      <div style={title}><h2>Yelp Reviews</h2></div>
      {
        yelpReviewsData.reviews.map(review => (
          <div style={reviewMain} key={review.id}>
            <div style={reviewTitle}>
              <img style={imgStyle} alt={review.user.image_url} src={review.user.image_url} />
              <p style={reviewUsername}>{review.user.name}</p>
              <RatingStar starRating={review.rating} />
            </div>
            <div style={speechBubble} />
            <div style={reviewContent}>
              {review.text}
              <br />
              <br />
              <p style={reviewPostedTime}>
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
};

const mapStateToProps = state => ({
  yelpReviewsData: state.fetchBusinessData.yelpReviewsData,
  yelpReviewsDataLoading: state.fetchBusinessData.yelpReviewsDataLoading,
});

export default compose(
  connect(mapStateToProps, null),
)(ReviewsYelp);
