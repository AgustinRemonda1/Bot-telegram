import { ICommandCreator, IFlags } from 'LogicServices/Commands/Creator/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { ITypesLists } from '../Creator.types';

interface IFirstStepProps {
  command: ICommandCreator;
  typesLists: ITypesLists;
  language: ILanguage;
}

export const generateFirstStepData = ({
  command,
  language,
  typesLists
}: IFirstStepProps) => [
  {
    title: language.name,
    value: command.name
  },
  {
    title: language.command,
    value: command.telCommand
  },
  {
    title: language.description,
    value: command.description,
    correction: true
  },
  {
    title: language.userType,
    value: typesLists.userTypes.find(
      (userType) => userType.id === command.userTypeId
    )?.name as string
  },
  {
    title: language.commandType,
    value: typesLists.commandTypes.find(
      (commandType) => commandType.id === command.commandTypeId
    )?.name as string
  },
  {
    title: language.response,
    value: command.botResponses?.response || '',
    correction: true
  }
];

interface ISecondStepProps {
  command: ICommandCreator;
  language: ILanguage;
  flags: IFlags;
}

const generateFileStepData = ({
  command,
  language
}: Omit<ISecondStepProps, 'flags'>) => [
  {
    title: language.filename,
    value: command.botResponses?.botResponseFiles?.filename as string
  },
  {
    title: language.file,
    value:
      String(command.botResponses?.botResponseFiles?.filename) +
      String(command.botResponses?.botResponseFiles?.extension)
  }
];

const generateParamStepData = ({
  command,
  language,
  flags
}: ISecondStepProps) => [
  {
    title: flags.isAButtonCommand ? language.buttons : language.coordinates,
    value: command.botResponses?.parameter as string,
    correction: true
  }
];

const generateNestedStepData = ({
  command,
  language
}: Omit<ISecondStepProps, 'flags'>) => [
  {
    title: '',
    value: '',
    isTable: true,
    dataset: command.botNestedCommands,
    config: [
      {
        name: language.name,
        property: 'name',
        nestedTable: 'botCommand'
      },
      {
        name: language.description,
        property: 'botCommand',
        custom: (command: ICommandCreator) =>
          command && command.botResponses.description
      }
    ]
  }
];

export const generateSecondStepData = ({
  command,
  language,
  flags
}: ISecondStepProps) => {
  if (flags.isAFileCommand) {
    return generateFileStepData({ command, language });
  }
  if (flags.isAButtonCommand || flags.isAParameterCommand) {
    return generateParamStepData({ command, language, flags });
  }
  if (flags.isANestedCommand) {
    return generateNestedStepData({ command, language });
  }
  return [];
};
