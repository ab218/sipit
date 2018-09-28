import {
  FETCH_BUSINESS_DATA, FETCH_BUSINESS_DATA_LOADING,
  FETCH_REVIEWS_DATA, FETCH_REVIEWS_DATA_LOADING,
} from '../../constants/actionTypes';

export default function (state = {
  businessData: [], reviewsData: [], businessDataLoading: true, reviewsDataLoading: true,
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
  default:
    return state;
  }
}
