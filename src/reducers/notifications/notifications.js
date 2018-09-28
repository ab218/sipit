import { NOTIFICATION_SHOW, NOTIFICATION_HIDE } from '../../constants/actionTypes';

export default function (state = { show: null }, action) {
  const { type, payload } = action;

  switch (type) {
  case NOTIFICATION_SHOW:
    return {
      ...state,
      show: payload,
    };
  case NOTIFICATION_HIDE:
    return {
      ...state,
      show: payload,
    };
  default:
    return state;
  }
}
