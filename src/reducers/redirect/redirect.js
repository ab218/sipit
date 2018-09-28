import { REDIRECT } from '../../constants/actionTypes';

export default function (state = { redirect: false }, action) {
  const { type, payload } = action;

  switch (type) {
  case REDIRECT:
    return {
      ...state,
      redirect: payload,
    };
  default:
    return state;
  }
}
