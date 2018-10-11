import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navbar, BusinessDetails, Reviews } from '../../components';
import { getBusinessData, getReviews } from '../../redux/actions';
import { FETCH_CAFES } from '../../redux/types';
import styles from './businessStyles';

class Business extends Component {
  componentDidMount() {
    const {
      getBusinessData, getReviews, match,
    } = this.props;
    getBusinessData(match.params.id);
    getReviews(match.params.id);
  }

  render() {
    const { businessDataLoading, reviewsDataLoading } = this.props;
    const { mainTheme, loading } = styles;
    return (
      <div>
        <Navbar
          page="business"
        />
        <div style={mainTheme}>
          {businessDataLoading
            ? <h1 style={loading}>Brewing results ...</h1>
            : <BusinessDetails />
          }
          {reviewsDataLoading
            ? <h1 style={loading}>Brewing reviews ...</h1>
            : <Reviews />
          }
        </div>
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
