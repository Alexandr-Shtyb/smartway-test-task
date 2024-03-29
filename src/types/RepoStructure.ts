type Owner = {
  avatar_url: string;
};

export type RepoStructure = {
  id: string;
  html_url: string;
  name: string;
  stargazers_count: number;
  forks_count: number;
  owner: Owner;
};
