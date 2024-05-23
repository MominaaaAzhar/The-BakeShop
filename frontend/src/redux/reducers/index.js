import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
// import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  users: usersReducer,
});