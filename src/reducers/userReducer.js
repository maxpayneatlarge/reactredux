import { FETCH_USERS } from "../actions/types";

export default function userReducer(state = { users: [] }, action) {
  if (action.type === "FETCH_USERS") {
    newFunction(action);
  }
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}

function newFunction(action) {
  console.log(
    "Users from userReducer: " +
      action.payload +
      " and action type: " +
      action.type
  );
}
