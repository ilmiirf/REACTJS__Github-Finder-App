import { createContext, useState } from "react";
import { GithubStateType } from "../../types/user";

const initialState: GithubStateType = {
  users: [],
  user: {},
  loading: false,
  dispatch: () => {},
};

const GithubContext = createContext<GithubStateType>(initialState);

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`);

    const data = await response.json();

    dispatch({ type: "GET_USERS", payload: { users: data } });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
