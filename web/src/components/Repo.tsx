import React from 'react';

interface AppProps {
  name: string;
  description: string;
  language: string;
  forksCount: number;
  debugDate: string;
}

export function Repo(props: AppProps) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.language}</td>
      <td>{props.forksCount}</td>
      <td>{props.debugDate}</td>
    </tr>
  );
}
