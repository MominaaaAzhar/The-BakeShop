import { GET_USERS, UPDATE_USER, USER_ERROR } from '../actions/types';

const initialState = {
  users: [],
  loading: true,
  error: {}
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => 
          user._id === payload._id ? payload : user
        ),
        loading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
