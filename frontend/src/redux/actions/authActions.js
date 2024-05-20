import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR } from './types';
import setAuthToken from '../../utils/setAuthToken';

const API_URL = 'http://localhost:5000';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${API_URL}/api/auth`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = ({ username, email, password }, navigate) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post(`${API_URL}/api/auth/register`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    console.log("HERE")
    navigate('/home');
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.errors,
    });
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
    const res = await axios.post(`${API_URL}/api/auth/login`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    navigate('/home');
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.errors,
    });
  }
};
