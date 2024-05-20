import axios from 'axios';
import { GET_PRODUCTS_SUCCESS, PRODUCT_ERROR } from './types';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR, payload: err.response.data });
  }
};
