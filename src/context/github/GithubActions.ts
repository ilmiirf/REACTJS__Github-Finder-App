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
