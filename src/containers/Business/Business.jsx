import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BusinessDetails, ReviewsYelp, Reviews } from '../../components';
import { getBusinessData, getYelpReviews, getReviews } from '../../redux/actions';
import styles from './businessStyles';

class Business extends Component {
  componentDidMount() {
    const {
      getBusinessData, getReviews, getYelpReviews, match, businessData,
    } = this.props;
    // only fetch if it's different from the previously selected cafe
    if (businessData.id !== match.params.id) {
      getBusinessData(match.params.id);
      getReviews(match.params.id);
      getYelpReviews(match.params.id);
    }
  }

  render() {
    const { redirect } = this.props;
    const { mainTheme } = styles;
    return (
      <div>
        {redirect && <Redirect to="/" />}
        <div style={mainTheme}>
          <BusinessDetails />
          <Reviews />
          <ReviewsYelp />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  businessData: state.fetchBusinessData.businessData,
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
  getYelpReviews: (params) => {
    dispatch(getYelpReviews(params));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Business);
