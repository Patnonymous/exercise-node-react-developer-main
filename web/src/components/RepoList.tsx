import React from 'react';

interface AppProps {
  reposArray: JSON[];
  fetchError: boolean;
}

export function RepoList(props: AppProps) {
  const reposList = props.reposArray.map((repo: any) => (
    <li key={repo.id}>{repo.name}</li>
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
        <ol>{reposList}</ol>
      </div>
    );
  }
}
