import { GET_POSITION } from '../../types';

export default function (state = { myLatLng: { lat: null, lng: null } }, action) {
  const { type, payload } = action;

  switch (type) {
  case GET_POSITION:
    return {
      ...state,
      myLatLng: {
        lat: payload.lat,
        lng: payload.lng,
      },
    };
  default:
    return state;
  }
}
