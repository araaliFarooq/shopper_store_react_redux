import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import createProductReducer from "./createProductReducer";

export default combineReducers({
  loginReducer,
  registerReducer,
  createProductReducer
});
