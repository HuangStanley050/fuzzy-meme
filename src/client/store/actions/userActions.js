import * as ActionType from "./actions";
import axios from "axios";
import API from "../../../api";
export const userFetch = () => async dispatch => {
  const res = await axios.get(API.users);
  dispatch({ type: ActionType.FETCH_USER, payload: res.data });
};
