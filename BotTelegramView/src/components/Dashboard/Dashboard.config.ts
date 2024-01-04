import { ILanguage } from 'Static/Lang/Lang.lang';
import { ICommand } from '~/LogicServices/Commands/Types';
import { IConfig } from '~/LogicServices/Shared/Types';

interface ITablesConfigProps {
  language: ILanguage;
}

export const generateCommandConfigWithLang = ({
  language
}: ITablesConfigProps) =>
  [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'botResponses',
      custom: (botResponses: ICommand['botResponses']) =>
        botResponses && botResponses.description
    },
    {
      name: language.status,
      property: 'status',
      custom: (status: ICommand['status']) =>
        status ? language.active : language.inactive,
      align: 'center'
    },
    {
      name: language.commandType,
      property: 'name',
      nestedTable: 'commandType'
    },
    {
      name: language.userType,
      property: 'name',
      nestedTable: 'userType'
    }
  ] as IConfig[];

export const generatePollConfigWithLang = ({ language }: ITablesConfigProps) =>
  [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'description'
    },
    {
      name: language.userType,
      property: 'name',
      nestedTable: 'userType'
    }
  ] as IConfig[];

interface IConfigCardsProps {
  language: ILanguage;
  totalSubscribers: number;
  newLastAdmission: number;
  totalPolls: number;
  totalCommands: number;
}

export const generateCardInfo = (configParams: IConfigCardsProps) => {
  const {
    language,
    totalSubscribers,
    newLastAdmission,
    totalPolls,
    totalCommands
  } = configParams;

  return [
    {
      name: language.totalSubscribers.toUpperCase(),
      value: totalSubscribers
    },
    {
      name: language.newLastAdmission.toUpperCase(),
      value: newLastAdmission
    },
    {
      name: language.totalPolls.toUpperCase(),
      value: totalPolls
    },
    {
      name: language.totalCommands.toUpperCase(),
      value: totalCommands
    }
  ];
};
