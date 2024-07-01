import { ILanguage } from 'Static/Lang/Lang.lang';

interface IConfig {
  language: ILanguage;
}

export const generateConfigWithLang = ({ language }: IConfig) => [
  {
    name: language.userTypeId,
    property: 'userTypeId'
  },
  {
    name: language.type,
    property: 'name'
  }
];
