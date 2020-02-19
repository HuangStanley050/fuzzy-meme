import * as ActionType from "../actions/actions";
const initiatState = {
  users: []
};

const reducer = (state = initiatState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
