import { CREATE_QUOTE, FETCH_QUOTES } from '../actions';
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    case CREATE_QUOTE:
      return [...state, action.payload];
    default:
      return state;
  }
};
