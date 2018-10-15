import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BusinessDetails, Reviews } from '../../components';
import { getBusinessData, getReviews } from '../../redux/actions';
import styles from './businessStyles';

class Business extends Component {
  componentDidMount() {
    const {
      getBusinessData, getReviews, match, businessData,
    } = this.props;
    // only fetch if it's different from the previously selected cafe
    if (businessData.id !== match.params.id) {
      getBusinessData(match.params.id);
      getReviews(match.params.id);
    }
  }

  render() {
    const { businessDataLoading, reviewsDataLoading, redirect } = this.props;
    const { mainTheme, loading } = styles;
    return (
      <div>
        {redirect && <Redirect to="/" />}
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
  businessData: state.fetchBusinessData.businessData,
  businessDataLoading: state.fetchBusinessData.businessDataLoading,
  reviewsDataLoading: state.fetchBusinessData.reviewsDataLoading,
  redirect: state.redirect.redirect,
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
