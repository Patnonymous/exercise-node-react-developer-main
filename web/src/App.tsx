import React from 'react';
import { RepoList } from './components/RepoList';

const fetchRepos = async () => {
  const res = await fetch('http://localhost:4000/repos');
  const reposJson = await res.json();
  return reposJson;
};

export function App() {
  const [repos, setRepos] = React.useState([]);
  const [fetchErr, setFetchErr] = React.useState(false);

  React.useEffect(() => {
    fetchRepos()
      .then((repoData) => {
        console.log(repoData);
        repoData.sort((a: any, b: any) => {
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        });
        console.log(repoData);
        setRepos(repoData.reverse());
      })
      .catch((err) => {
        console.log(err);
        setFetchErr(true);
      });
  }, []);

  return (
    <div>
      <h1>Silverorange Repos</h1>
      <RepoList fetchError={fetchErr} reposArray={repos} />
    </div>
  );
}
