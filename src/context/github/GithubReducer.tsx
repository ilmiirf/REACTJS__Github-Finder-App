import { GithubActionType, GithubStateType } from "../../types/user";

const githubReducer = (
  state: GithubStateType,
  action: GithubActionType
): GithubStateType => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
