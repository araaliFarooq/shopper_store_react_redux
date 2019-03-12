import actionTypes from "../actions/actionTypes";

const initialState = {
  errors: {},
  product: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDPRODUCTFAIL:
      return {
        ...state,
        errors: action.payload
      };
    case actionTypes.ADDPRODUCTSUCCESS:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};
