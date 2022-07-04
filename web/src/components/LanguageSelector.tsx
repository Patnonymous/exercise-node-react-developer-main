import React from 'react';

interface AppProps {
  onLangClickHandler: any;
  languages: string[];
}

/**
 * @author Anonymous
 * @description Displays buttons for each language, when clicked
 * passes the language to the parent using a handler.
 * @param props Component props containing the handler and array of languages.
 * @returns Jsx.
 */
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
