import React from 'react';
import { Repo } from './Repo';

interface AppProps {
  reposArray: JSON[];
  fetchError: boolean;
}

/**
 * @author Anonymous
 * @description This component maps the array of repositories to the Repo
 * component and displays them.
 * If an error occurs, an error message is displayed instead.
 * @param props Props containing reposArray and error status.
 * @returns Jsx.
 */
export function RepoList(props: AppProps) {
  const reposList = props.reposArray.map((repo: any) => (
    <Repo
      key={repo.id}
      name={repo.name}
      description={repo.description}
      language={repo.language}
      forksCount={repo.forksCount}
    />
  ));

  if (props.fetchError) {
    return (
      <div>
        <h2>
          An error has occurred when fetching repos. Please refresh the page or
          contact an administrator.
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
              <th>Forks Count</th>
            </tr>
          </thead>
          <tbody>{reposList}</tbody>
        </table>
      </div>
    );
  }
}
