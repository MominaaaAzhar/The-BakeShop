import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_PROFILE, UPDATE_PROFILE, PROFILE_ERROR } from './types';

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/profile`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Failed to load profile');
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/api/profile`, formData);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    toast.success('Profile updated successfully');
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Failed to update profile');
  }
};
