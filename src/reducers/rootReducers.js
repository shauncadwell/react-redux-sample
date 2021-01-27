import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import isLoggedInReducer from "./isLoggedInReducer";
import snackBarReducer from "./snackBarReducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    count: CounterReducer,
    snackbar: snackBarReducer,
    loggedIn: isLoggedInReducer,
  });
