import React, { Component } from 'react';
import axios from 'axios';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import BusinessDetails from './BusinessDetails';
import Reviews from './Reviews';
import { getBusinessData, getReviews } from '../actions';

const mainTheme = {
//  backgroundColor: '#DFDCE3',
  backgroundColor: '#FFFF',
  fontFamily: 'Quicksand',

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
          ? <h1 style={{ color: 'grey' }}>Brewing results ...</h1>
          : <BusinessDetails />
        }
        {reviewsDataLoading
          ? <h1 style={{ color: 'grey' }}>Brewing reviews ...</h1>
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
