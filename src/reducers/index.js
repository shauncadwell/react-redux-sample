import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import isLoggedInReducer from "./isLoggedInReducer";
import snackBarReducer from "./snackBarReducer";

const JoinedReducers = combineReducers({
  count: CounterReducer,
  snackbar: snackBarReducer,
  loggedIn: isLoggedInReducer,
});

export default JoinedReducers;
