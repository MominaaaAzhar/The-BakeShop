import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_USERS, UPDATE_USER, USER_ERROR } from './types';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateUserAdminStatus = (id, isAdmin) => async (dispatch) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/api/users/${id}`, { isAdmin });
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
    toast.success('Updated successful');
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Failed to update user');
  }
};
