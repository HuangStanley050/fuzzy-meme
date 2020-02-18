import { createStore, applyMiddlware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const rootReducer = () => "nothing";
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddlware(thunk))
);

export default store;
