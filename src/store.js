import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers/rootReducers";

export const history = createBrowserHistory();

export default function configureStore(preLoadedState) {
  const store = createStore(
    createRootReducer(history),
    preLoadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );
  return store;
}
