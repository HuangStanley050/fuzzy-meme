import * as ActionType from "./actions";
//import axios from "axios";
import API from "../../../api";
export const userFetch = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");
  dispatch({ type: ActionType.FETCH_USER, payload: res.data });
};
