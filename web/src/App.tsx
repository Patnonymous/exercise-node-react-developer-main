import React from 'react';
import { RepoList } from './components/RepoList';
import { LanguageSelector } from './components/LanguageSelector';
import { Repo } from './models/Repo';

/**
 * @author Anonymous
 * @description Fetches the repos from the api and returns them.
 * @returns {JSON} JSON array of repos.
 */
const fetchRepos = async () => {
  const res = await fetch('http://localhost:4000/repos');
  const reposJson = await res.json();
  return reposJson;
};

/**
 * @author Anonymous
 * @description Fetches repos from the api, sort, filters, and gets the Languages used,
 * then displays using relevant components.
 * @returns Jsx.
 */
export function App() {
  // Init state.
  const [repos, setRepos] = React.useState([]);
  const [fetchErr, setFetchErr] = React.useState(false);
  const [langs, setLangs] = React.useState<any[]>([]);
  const [langFilter, setLangFilter] = React.useState('all');

  /**
   * @description Saves the repos to the state, and saves unique languages
   * to the state.
   */
  React.useEffect(() => {
    fetchRepos()
      .then((repoData) => {
        // Sort the Repos by date created.
        // Reverse when doing setRepos.
        repoData.sort((a: any, b: any) => {
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        });

        // Get the relevant languages then set state.
        const uniqueLangs: string[] = [];
        repoData.forEach((repo: any) => {
          if (!uniqueLangs.includes(repo.language)) {
            uniqueLangs.push(repo.language);
          }
        });
        setLangs(uniqueLangs);
        setRepos(repoData.reverse());
      })
      .catch((err) => {
        setFetchErr(true);
      });
  }, []);

  /**
   * @description If a different lang is selected, set it as the filter lang.
   * Else if it's the same then turn off filtering by setting to "all".
   * @param lang Language to set.
   */
  const langSelectorClicked = (lang: string) => {
    if (lang === langFilter) {
      setLangFilter('all');
    } else {
      setLangFilter(lang);
    }
  };

  return (
    <div>
      <h1>Silverorange Repos</h1>
      <LanguageSelector
        onLangClickHandler={langSelectorClicked}
        languages={langs}
      />
      <RepoList
        fetchError={fetchErr}
        reposArray={repos.filter(
          (repo: Repo) => langFilter === 'all' || repo.language === langFilter
        )}
      />
    </div>
  );
}
