import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RatingStar } from '..';
import styles from './reviewStyles';

const GetReviews = ({ reviewsData }) => (
  reviewsData && reviewsData.map((review, i) => (
    <div style={styles.reviewMain} key={i}>
      <div style={styles.reviewTitle}>
        {review.first_name}
        &nbsp;
        {review.last_name}
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
        </p>
      </div>
      <br />
    </div>
  ))
);

const Reviews = (props) => {
  const { reviewsData } = props;
  const { reviewWrapper, title } = styles;
  return (
    <React.Fragment>
      <div style={reviewWrapper}>
        <div style={title}><h2>Reviews</h2></div>
        <GetReviews reviewsData={reviewsData} />
        <br />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  reviewsData: state.fetchBusinessData.reviewsData,
});

export default compose(
  connect(mapStateToProps, null),
)(Reviews);
