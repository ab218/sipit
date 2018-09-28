export default function (state = {
  searchName: 'coffee',
  searchLocation: 'vancouver',
  searchResults: 10,
}, action) {
  const { type, payload } = action;

  switch (type) {
  case 'SEARCH_NAME':
    return {
      ...state,
      searchName: payload,
    };
  case 'SEARCH_LOCATION':
    return {
      ...state,
      searchLocation: payload,
    };
  case 'SEARCH_RESULTS':
    return {
      ...state,
      searchResults: payload,
    };
  default:
    return state;
  }
}
