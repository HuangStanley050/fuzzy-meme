import * as ActionType from "./actions";
//import axios from "axios";
import API from "../../../api";
export const userFetch = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");
  dispatch({ type: ActionType.FETCH_USER, payload: res.data });
};

export const fetchCurrentUser = () => {
  return async (dispatch, getState, api) => {
    const res = await api.get("/current_user");
    dispatch({ type: ActionType.FETCH_CURRENT_USER, payload: res.data });
  };
};
