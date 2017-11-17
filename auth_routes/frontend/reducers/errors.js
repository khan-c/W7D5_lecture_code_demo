import { RECEIVE_ERRORS } from '../actions/session';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return [...state, ...action.errors];
    default:
      return state;
  }
};
