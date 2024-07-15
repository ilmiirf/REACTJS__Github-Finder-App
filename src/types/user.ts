export type UserType = {
  id?: number;
  name?: string;
  type?: string;
  avatar_url?: string;
  location?: string;
  bio?: string;
  blog?: string;
  twitter_username?: string;
  login?: string;
  html_url?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  public_gists?: number;
  hireable?: boolean;
};

export type UsersType = Array<UserType>;

export type GithubActionType = {
  type: string;
  payload?: any;
};

export type GithubStateType = {
  user: UserType;
  users: UsersType;
  loading: boolean;
  dispatch: (action: GithubActionType) => void;
};
