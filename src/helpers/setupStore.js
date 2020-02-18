import { createStore, applyMiddlware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const rootReducer = () => "nothing";
export default () => {
  const store = createStore(rootReducer, {}, applyMiddlware(thunk));
  return store;
};
