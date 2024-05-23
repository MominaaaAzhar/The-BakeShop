import axios from 'axios';
import { toast } from 'react-toastify';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from './types';
import setAuthToken from '../../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/auth/`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
    toast.error('Failed to load user');
  }
};

export const register = ({ firstName, lastName, username, email, password }, navigate) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ firstName, lastName, username, email, password });

  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/auth/register`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    navigate('/');
    toast.success('Registration successful');
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.errors,
    });
    toast.error('Registration failed');
  }
};

export const login = ({ email, password }, navigate) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/auth/login`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log(res.data)
    navigate('/');
    toast.success('Login successful');
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.errors,
    });
    toast.error(`${err.response.data.errors[0].msg}`);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  toast.success('Logged out successfully');
};
