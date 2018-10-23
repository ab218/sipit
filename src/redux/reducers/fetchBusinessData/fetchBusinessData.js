import {
  FETCH_BUSINESS_DATA, FETCH_BUSINESS_DATA_LOADING,
  FETCH_REVIEWS_DATA, FETCH_REVIEWS_DATA_LOADING,
  FETCH_YELP_REVIEWS_DATA, FETCH_YELP_REVIEWS_DATA_LOADING,
} from '../../types';

export default function (state = {
  businessData: [],
  reviewsData: [],
  yelpReviewsData: [],
  businessDataLoading: true,
  reviewsDataLoading: true,
  yelpReviewsDataLoading: true,
}, action) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_BUSINESS_DATA:
    return {
      ...state,
      businessData: payload,
    };
  case FETCH_BUSINESS_DATA_LOADING:
    return {
      ...state,
      businessDataLoading: payload,
    };
  case FETCH_REVIEWS_DATA:
    return {
      ...state,
      reviewsData: payload,
    };
  case FETCH_REVIEWS_DATA_LOADING:
    return {
      ...state,
      reviewsDataLoading: payload,
    };
  case FETCH_YELP_REVIEWS_DATA:
    return {
      ...state,
      yelpReviewsData: payload,
    };
  case FETCH_YELP_REVIEWS_DATA_LOADING:
    return {
      ...state,
      yelpReviewsDataLoading: payload,
    };
  default:
    return state;
  }
}
