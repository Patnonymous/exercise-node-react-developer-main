import React from 'react';

interface AppProps {
  onLangClickHandler: any;
  languages: string[];
}

export function LanguageSelector(props: AppProps) {
  const langClickHandler = (lang: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    props.onLangClickHandler(lang);
  };
  const langsBtns = props.languages.map((lang: string) => (
    <button key={lang} onClick={langClickHandler(lang)} type="button">
      {lang}
    </button>
  ));
  return <div>{langsBtns}</div>;
}
