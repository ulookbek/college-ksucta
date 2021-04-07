import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import usersReducer from "../reducers/user-reducer";
import thunkMiddleware from "redux-thunk";
import { loadFromLocalStorage, saveToLocalStorage } from "./local-storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  users: usersReducer,
  router: connectRouter(history),
});
const persistedState = loadFromLocalStorage();

const enhancers = composeEnhancers(
  applyMiddleware(...[thunkMiddleware, routerMiddleware(history)])
);

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      user: store.getState().users.user,
    },
  });
});

export default store;
