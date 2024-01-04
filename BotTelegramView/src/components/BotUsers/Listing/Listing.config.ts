import { ILanguage } from 'Static/Lang/Lang.lang';
import { IBotUsers } from '~/LogicServices/BotUsers/Types';
import { IConfig } from '~/LogicServices/Shared/Types';

interface IConfigProps {
  language: ILanguage;
}

export const generateConfigWithLang = ({ language }: IConfigProps) => {
  return [
    {
      name: language.username,
      property: 'telUsername'
    },
    {
      name: language.name,
      property: 'telFirstName'
    },
    {
      name: language.lastName,
      property: 'telLastName'
    },
    {
      name: language.dni,
      property: 'guaraniUser',
      custom: (guaraniUser: IBotUsers['guaraniUser']) =>
        guaraniUser && guaraniUser.dni
    },
    {
      name: language.email,
      property: 'guaraniUser',
      custom: (guaraniUser: IBotUsers['guaraniUser']) =>
        guaraniUser && guaraniUser.email
    },
    {
      name: language.phoneNumber,
      property: 'guaraniUser',
      custom: (guaraniUser: IBotUsers['guaraniUser']) =>
        guaraniUser && guaraniUser.phoneNumber
    },
    {
      name: language.userType,
      property: 'userType',
      custom: (userType: IBotUsers['userType']) => userType && userType.name
    }
  ] as IConfig[];
};
