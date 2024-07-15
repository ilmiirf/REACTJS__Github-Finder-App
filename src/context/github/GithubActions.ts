import { UsersType } from "../../types/user";

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const searchUsers = async (text: string): Promise<UsersType> => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`);

  const { items } = await response.json();
  console.log(items);

  return items;
};

export const getUser = async (login: string) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`);

  if (response.status === 404) {
    console.log(response.status);
    window.location.href = "/notfound";
  } else {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

export const getUserRepos = async (login: string) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: "10",
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);

  const data = await response.json();
  console.log(data);
  return data;
};
