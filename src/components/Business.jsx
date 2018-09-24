import React, { Component } from 'react';
import axios from 'axios';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import BusinessDetails from './BusinessDetails';
import Reviews from './Reviews';
import { getBusinessData, getReviews } from '../actions';

const mainTheme = {
  backgroundColor: '#C1A88B',
};

class Business extends Component {
  componentDidMount() {
    const { getBusinessData, getReviews, match } = this.props;
    getBusinessData(match.params.id);
    getReviews(match.params.id);
  }

  render() {
    const { businessDataLoading, reviewsDataLoading } = this.props;

    return (
      <div style={mainTheme}>
        <Navbar
          page="business"
        />
        {businessDataLoading
          ? <h1 style={{ color: 'white' }}>Brewing results ...</h1>
          : <BusinessDetails />
        }
        {reviewsDataLoading
          ? <h1 style={{ color: 'white' }}>Brewing reviews ...</h1>
          : <Reviews />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  businessDataLoading: state.fetchBusinessData.businessDataLoading,
  reviewsDataLoading: state.fetchBusinessData.reviewsDataLoading,
});


const mapDispatchToProps = dispatch => ({
  getBusinessData: (params) => {
    dispatch(getBusinessData(params));
  },
  getReviews: (params) => {
    dispatch(getReviews(params));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Business);
