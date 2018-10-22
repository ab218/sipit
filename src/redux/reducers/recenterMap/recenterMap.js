import { RECENTER_MAP, RECENTER_FAVORITES_MAP } from '../../types';

export default function (state = {
  myLatLng: { lat: null, lng: null },
  favLatLng: { lat: null, lng: null },
  zoom: null,
}, action) {
  const { type, payload } = action;

  switch (type) {
  case RECENTER_MAP:
    return {
      ...state,
      myLatLng: {
        lat: payload.lat,
        lng: payload.lng,
      },
    };
  case RECENTER_FAVORITES_MAP:
    return {
      ...state,
      favLatLng: {
        lat: payload.lat,
        lng: payload.lng,
      },
      zoom: 13,
    };
  default:
    return state;
  }
}
