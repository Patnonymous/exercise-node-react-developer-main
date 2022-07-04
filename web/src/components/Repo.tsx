import React from 'react';

interface AppProps {
  name: string;
  description: string;
  language: string;
  forksCount: number;
}

/**
 * @author Anonymous
 * @description Repo component displays the specified data for each repo.
 * @param props Props containing repo data.
 * @returns Jsx.
 */
export function Repo(props: AppProps) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.language}</td>
      <td>{props.forksCount}</td>
    </tr>
  );
}
