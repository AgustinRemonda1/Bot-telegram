import { createContext } from 'react';
import EN from './En.lang';
import ES from './Es.lang';

export interface ILanguage {
  [key: string]: string;
}

export const language = { EN: EN, ES: ES };

export const LanguageContext = createContext({
  lang: 'ES',
  onChangeLanguage: (e: any): void => {},
  language: language.ES
});
