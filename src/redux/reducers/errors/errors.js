import { ADD_ERROR, REMOVE_ERROR } from '../../types';

export default function errors(state = [], action) {
  const { type, error, index } = action;

  switch (type) {
  case ADD_ERROR:
    return state.concat([error]);

  case REMOVE_ERROR:
    return state.filter((error, i) => i !== index);

  default:
    return state;
  }
}
