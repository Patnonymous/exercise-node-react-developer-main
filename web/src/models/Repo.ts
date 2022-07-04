import { User } from './User';

export interface Repo {
  id: number;
  name: string;
  fullName: string;
  owner: User;
  private: boolean;
  htmlUrl: string;
  description: string;
  fork: boolean;
  url: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  gitUrl: string;
  sshUrl: string;
  cloneUrl: string;
  svnUrl: string;
  homepage: string;
  size: number;
  stargazersCount: number;
  watchersCount: number;
  language: string;
  forksCount: number;
  forks: number;
  commitsUrl: string;
  defaultBranch: string;
}
