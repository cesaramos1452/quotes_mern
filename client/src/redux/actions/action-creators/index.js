import { FETCH_QUOTES, CREATE_QUOTE } from '../../actions';
import axios from 'axios';
export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/quotes');
    dispatch({ type: FETCH_QUOTES, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (quoteData) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/quotes',
      quoteData
    );
    dispatch({ type: CREATE_QUOTE, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};
