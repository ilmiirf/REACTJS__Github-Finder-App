import { UsersType } from "../../types/user";

import axios from "axios";

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
});

export const searchUsers = async (text: string): Promise<UsersType> => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);

  return response.data.items;
};

export const getUserAndRepos = async (login: string) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};

// export const getUser = async (login: string) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`);

//   if (response.status === 404) {
//     console.log(response.status);
//     window.location.href = "/notfound";
//   } else {
//     const data = await response.json();
//     console.log(data);
//     return data;
//   }
// };

// export const getUserRepos = async (login: string) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: "10",
//   });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);

//   const data = await response.json();
//   console.log(data);
//   return data;
// };
