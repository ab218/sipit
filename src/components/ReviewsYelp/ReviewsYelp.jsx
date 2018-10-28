import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RatingStar } from '..';
import styles from './reviewsYelpStyles';

const GetReviews = ({ yelpReviewsData }) => (
  yelpReviewsData && yelpReviewsData.reviews.map(review => (
    <div style={styles.reviewMain} key={review.id}>
      <div style={styles.reviewTitle}>
        <img style={styles.imgStyle} alt={review.user.image_url} src={review.user.image_url} />
        <p style={styles.reviewUsername}>{review.user.name}</p>
        <RatingStar starRating={review.rating} />
      </div>
      <div style={styles.speechBubble} />
      <div style={styles.reviewContent}>
        {review.text}
        <br />
        <br />
        <p style={styles.reviewPostedTime}>
          {`posted: ${review.time_created}`}
        </p>
      </div>
      <br />
    </div>
  ))
);

const ReviewsYelp = (props) => {
  const { yelpReviewsData, yelpReviewsDataLoading } = props;
  const { reviewWrapper, title, loading } = styles;
  return yelpReviewsDataLoading
    ? <h1 style={loading}>Brewing reviews ...</h1>
    : (
      <div style={reviewWrapper}>
        <div style={title}><h2>Yelp Reviews</h2></div>
        <GetReviews yelpReviewsData={yelpReviewsData} />
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
