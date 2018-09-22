export default function (state = { favorites: [] }, action) {
  const { type, payload } = action;
  switch (type) {
  case 'FETCH_FAVORITES':
    return {
      ...state,
      favorites: payload,
    };
  default:
    return state;
  }
}
