import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../client/store/reducers/user";

const rootReducer = combineReducers({
  user: userReducer
});
export default () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
