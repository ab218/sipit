import {
  SEARCH_NAME, SEARCH_LOCATION, SEARCH_RADIUS, SEARCH_RESULTS, SEARCH_OPEN_NOW,
} from '../../types';

export default function (state = {
  searchName: 'coffee',
  searchLocation: '',
  searchResults: 10,
  searchRadius: 5000,
  searchOpenNow: false,
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
  case SEARCH_RADIUS:
    return {
      ...state,
      searchRadius: payload,
    };
  case SEARCH_OPEN_NOW:
    return {
      ...state,
      searchOpenNow: payload,
    };
  default:
    return state;
  }
}
