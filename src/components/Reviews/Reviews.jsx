import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RatingStar, ReviewsForm } from '..';
import styles from './reviewStyles';

const GetReviews = ({ reviewsData }) => (
  reviewsData && reviewsData.map((review, i) => (
    <div style={styles.reviewMain} key={i}>
      <div style={styles.reviewTitle}>
        {review.title}
        <RatingStar starRating={parseInt(review.coffee_rating, 10) /* radix */} />
      </div>
      <div style={styles.speechBubble} />
      <div style={styles.reviewContent}>
        <br />
        <br />
        {review.body}
        <br />
        <br />
        <p style={styles.reviewPostedTime}>
          {`posted: ${review.created_at}`}
          <br />
          {`by ${review.first_name} ${review.last_name}`}
        </p>
      </div>
      <br />
    </div>
  ))
);

const Reviews = ({ reviewsData }) => (
  <React.Fragment>
    <div style={styles.reviewWrapper}>
      <ReviewsForm />
      {reviewsData.length
        ? (
          <React.Fragment>
            <div style={styles.title}><h2>Reviews</h2></div>
            <GetReviews reviewsData={reviewsData} />
            <br />
          </React.Fragment>
        )
        : null}
    </div>
  </React.Fragment>
);

const mapStateToProps = state => ({
  reviewsData: state.fetchBusinessData.reviewsData,
});

export default compose(
  connect(mapStateToProps, null),
)(Reviews);
