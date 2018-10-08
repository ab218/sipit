import { SEARCH_NAME, SEARCH_LOCATION, SEARCH_RESULTS } from '../../types';

export default function (state = {
  searchName: 'coffee',
  searchLocation: '',
  searchResults: 10,
}, action) {
  const { type, payload } = action;

  switch (type) {
  case SEARCH_NAME:
    return {
      ...state,
      searchName: payload,
    };
  case SEARCH_LOCATION:
    return {
      ...state,
      searchLocation: payload,
    };
  case SEARCH_RESULTS:
    return {
      ...state,
      searchResults: payload,
    };
  default:
    return state;
  }
}
