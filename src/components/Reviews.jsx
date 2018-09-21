import React from 'react';


const reviewTitle = {
  backgroundColor: 'white',
  color: 'black',
  textDecoration: 'underline',
};

const review = {
  backgroundColor: 'white',
  color: 'black',
};

class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { reviewsData } = this.props;

    return (
      <div style={{ maxWidth: '50%', margin: 'auto' }}>
        <h3 style={{ color: 'pink' }}>Yelp Reviews</h3>
        {
          reviewsData.reviews.map((sub, subindex) => (
            <div style={review} key={sub.id}>
              <h4 style={reviewTitle}>
                {`${subindex + 1}. ${sub.user.name}`}
              </h4>
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

export default BusinessDetails;
