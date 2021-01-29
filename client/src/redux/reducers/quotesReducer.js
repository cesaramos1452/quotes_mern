import {
  CREATE_QUOTE,
  DELETE_QUOTE,
  FETCH_QUOTES,
  UPDATE_QUOTE,
} from '../actions';
export const quotes = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    case CREATE_QUOTE:
      return [...state, action.payload];
    case UPDATE_QUOTE:
      return state.map((quote) =>
        quote._id === action.payload._id ? action.payload : quote
      );
    case DELETE_QUOTE:
      return state.filter((quote) => quote._id !== action.payload);
    default:
      return state;
  }
};
