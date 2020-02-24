import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import API from "../api";
import userReducer from "../client/store/reducers/user";
import authReducer from "../client/store/reducers/auth";
import adminReducer from "../client/store/reducers/admin";
import { composeWithDevTools } from "remote-redux-devtools";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  admin: adminReducer
});
export default req => {
  const axiosInstance = axios.create({
    baseURL: API.root,
    headers: { cookie: req.get("cookie") || "" }
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
