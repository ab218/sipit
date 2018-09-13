export default function (state = { cafesLoading: true }, action) {
  const { type, payload } = action;

  switch (type) {
  case 'FETCH_CAFES':
    return {
      ...state,
      cafesList: payload,
    };
  case 'FETCH_CAFES_LOADING':
    return {
      ...state,
      cafesLoading: payload,
    };
  default:
    return state;
  }
}
