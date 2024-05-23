import axios from 'axios';
import { GET_PRODUCTS, PRODUCTS_ERROR, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './types';
import { toast } from 'react-toastify';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Error loading product');
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/products`, productData);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
    toast.success('Product added successfully');
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Error adding product');
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/api/products/${id}`, productData);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
    toast.success('Product updated successfully');
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Error updating product');
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/api/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    toast.success('Product deleted successfully');
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Error deleting product');
  }
};
