import { GET_PRODUCTS_SUCCESS, PRODUCT_ERROR } from '../actions/types';

const initialState = {
  products: [],
  loading: true,
  error: null,
};

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}