import React from 'react';


const reviewTitle = {
  backgroundColor: 'rgb(93, 68, 39)',
  color: 'white',
  textDecoration: 'underline',

};

const review = {
  backgroundColor: 'rgb(93, 68, 39)',
  color: 'white',
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
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
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
