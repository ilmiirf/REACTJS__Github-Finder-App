import React, { useReducer } from "react";
import githubReducer from "./GithubReducer";
import { GithubStateType } from "../../types/user";

const initialState: GithubStateType = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  dispatch: () => {},
};

const GithubContext = React.createContext<GithubStateType>(initialState);

export const GithubProvider = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
