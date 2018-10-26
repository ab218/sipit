import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RatingStar } from '..';
import styles from './reviewStyles';

const Reviews = (props) => {
  const { reviewsData } = props;
  const {
    reviewWrapper, title, reviewMain, reviewTitle,
    reviewContent, reviewPostedTime, speechBubble,
  } = styles;
  return (
    <React.Fragment>
      {reviewsData
          && (
            <div style={reviewWrapper}>
              <div style={title}><h2>Reviews</h2></div>
              {reviewsData.map((review, i) => (
                <div style={reviewMain} key={i}>
                  <div style={reviewTitle}>
                    {review.first_name}
                    &nbsp;
                    {review.last_name}
                    <RatingStar starRating={parseInt(review.coffee_rating, 10) /* radix */} />
                  </div>
                  <div style={speechBubble} />
                  <div style={reviewContent}>
                    <br />
                    <br />
                    {review.body}
                    <br />
                    <br />
                    <p style={reviewPostedTime}>
                      {`posted: ${review.created_at}`}
                    </p>
                  </div>
                  <br />
                </div>
              ))}
              <br />
            </div>
          )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  reviewsData: state.fetchBusinessData.reviewsData,
});

export default compose(
  connect(mapStateToProps, null),
)(Reviews);
