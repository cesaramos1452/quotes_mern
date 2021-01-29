import {
  FETCH_QUOTES,
  CREATE_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
} from '../../actions';
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

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `http://localhost:5000/quotes/${id}`,
      post
    );
    dispatch({ type: UPDATE_QUOTE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    axios.delete(`http://localhost:5000/quotes/${id}`);
    dispatch({ type: DELETE_QUOTE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
