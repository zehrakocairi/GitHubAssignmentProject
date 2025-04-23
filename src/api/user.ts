const GITHUB_BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;

export const getUserInfo = async (username: string) => {
  return mockedUserInfo;
  const url = `${GITHUB_BASE_URL}/users/${username}`;
  const res = await fetch(`${url}`);
  if (!res.ok) throw new Error("Failed to fetch user info");
  return res.json();
};

const mockedUserInfo = {
  login: "JakeWharton",
  id: 66577,
  node_id: "MDQ6VXNlcjY2NTc3",
  avatar_url: "https://avatars.githubusercontent.com/u/66577?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/JakeWharton",
  html_url: "https://github.com/JakeWharton",
  followers_url: "https://api.github.com/users/JakeWharton/followers",
  following_url: "https://api.github.com/users/JakeWharton/following{/other_user}",
  gists_url: "https://api.github.com/users/JakeWharton/gists{/gist_id}",
  starred_url: "https://api.github.com/users/JakeWharton/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/JakeWharton/subscriptions",
  organizations_url: "https://api.github.com/users/JakeWharton/orgs",
  repos_url: "https://api.github.com/users/JakeWharton/repos",
  events_url: "https://api.github.com/users/JakeWharton/events{/privacy}",
  received_events_url: "https://api.github.com/users/JakeWharton/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Jake Wharton",
  company: "@cashapp / @square",
  blog: "jakewharton.com",
  location: "Pittsburgh, PA, USA",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 145,
  public_gists: 54,
  followers: 67779,
  following: 9,
  created_at: "2009-03-24T16:09:53Z",
  updated_at: "2025-04-15T15:47:19Z",
};
