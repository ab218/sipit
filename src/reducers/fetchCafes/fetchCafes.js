import { FETCH_CAFES, FETCH_CAFES_LOADING } from '../../constants/actionTypes';

export default function (state = { cafesList: [], cafesLoading: true }, action) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_CAFES:
    return {
      ...state,
      cafesList: payload,
    };
  case FETCH_CAFES_LOADING:
    return {
      ...state,
      cafesLoading: payload,
    };
  default:
    return state;
  }
}
