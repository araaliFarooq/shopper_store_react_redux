import actionTypes from "../actions/ActionTypes";

const initialState = {
  errors: {},
  user: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGINFAIL:
      return {
        ...state,
        errors: action.payload
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
