import { GET_POSITION } from '../../constants/actionTypes';

export default function (state = { myLatLng: { lat: 49.2827, lng: -123.1207 } }, action) {
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
