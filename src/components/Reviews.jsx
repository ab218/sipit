import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import RatingStar from './RatingStar';

const reviewTitle = {
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: '#f2f1ef',
  color: 'black',
  display: 'inline-flex',
  borderTop: '1px solid white',
};

const review = {
  backgroundColor: '#f2f1ef',
  color: 'black',
  position: 'relative',
  borderRadius: '.5em',
};

const imgStyle = {
  height: '3em',
  width: '3em',
  borderRadius: '3em',
};

class Reviews extends React.Component {
  render() {
    const { reviewsData } = this.props;

    return (
      <div style={{ maxWidth: '50em', margin: 'auto' }}>
        <h3 style={{ color: 'pink' }}>Yelp Reviews</h3>
        {
          reviewsData.reviews.map(sub => (
            <div style={review} key={sub.id}>
              <div style={reviewTitle}>
                <img style={imgStyle} alt={sub.user.image_url} src={sub.user.image_url} />
                <p style={{ marginRight: 'auto', padding: '1em' }}>{`${sub.user.name}`}</p>
                <RatingStar starRating={sub.rating} />
              </div>
              <p style={review}>
                {sub.text}
              </p>
              <p style={{ color: 'green', float: 'right' }}>
              posted:
{' '}
{sub.time_created}
              </p>
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
