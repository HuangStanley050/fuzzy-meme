import * as ActionType from "../actions/actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.FETCH_ADMINS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
