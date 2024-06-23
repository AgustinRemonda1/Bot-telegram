import { IInput } from 'components/Shared/BuildInputs/BuildInput.types';
import { IConfig } from 'LogicServices/Shared/Types';
import trashIcon from 'Static/Assets/Icons/delete.svg';
import { ICommand, INestedCommands } from 'LogicServices/Commands/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { IInputConfigProps } from '../../Creator/Creator.types';

export const inputNames = {
  filename: 'filename',
  file: 'file',
  extension: 'extension',
  parameter: 'parameter',
  nestedCommands: 'nestedCommands'
};

export const generateFileInputs = (
  inputParams: IInputConfigProps
): IInput[] => {
  const { language, onChangeInputs, command, emptyFields, editMode } =
    inputParams;

  return [
    {
      type: 'text',
      name: inputNames.filename,
      title: language.filename,
      onChange: onChangeInputs,
      value: command.botResponses?.botResponseFiles?.filename || '',
      emptyFields
    },
    {
      type: 'file',
      name: inputNames.file,
      title: language.file,
      onChange: onChangeInputs,
      value: command.botResponses?.botResponseFiles?.file || '',
      fileValues: {
        filename: command.botResponses.botResponseFiles?.filename || '',
        extension: command.botResponses.botResponseFiles?.extension || ''
      },
      fileTargets: {
        file: inputNames.file,
        extension: inputNames.extension
      },
      emptyFields
    }
  ];
};

export const generateParameterInput = (inputParams: IInputConfigProps) => {
  const {
    language,
    onChangeInputs,
    emptyFields,
    isAButtonCommand,
    command,
    editMode
  } = inputParams;

  return {
    type: 'text',
    name: inputNames.parameter,
    title: isAButtonCommand ? language.buttons : language.coordinates,
    onChange: onChangeInputs,
    value: command.botResponses?.parameter,
    emptyFields,
    correction: true,
    disabled: editMode,
    multiline: true
  } as IInput;
};

interface ITableConfig {
  language: ILanguage;
  onDeleteCommand: (id: number) => void;
  editMode: boolean;
}

export const nestedCommandTableConfig = (configParams: ITableConfig) => {
  const { language, onDeleteCommand, editMode } = configParams;
  return [
    {
      name: language.name,
      property: 'name',
      nestedTable: 'botCommand'
    },
    {
      name: language.description,
      property: 'botCommand',
      custom: (command: ICommand) => command && command.botResponses.description
    },
    {
      name: language.actions,
      align: 'center',
      isActions: true,
      actions: [
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon.src,
          disabled: editMode,
          onClick: (command: INestedCommands) => {
            onDeleteCommand(Number(command.botCommand.botCommandId));
          }
        }
      ]
    }
  ] as IConfig[];
};
