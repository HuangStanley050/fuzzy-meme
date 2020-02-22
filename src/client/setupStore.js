import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./store/reducers/user";
import authReducer from "./store/reducers/auth";
import { axiosInstance } from "./axiosSetup";
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer
});
const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

export default store;
