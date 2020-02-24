import * as ActionType from "./actions";

export const fetchAdmins = () => {
  return async (dispatch, getState, api) => {
    const res = await api.get("/admins");
    dispatch({ type: ActionType.FETCH_ADMINS, payload: res.data });
  };
};
