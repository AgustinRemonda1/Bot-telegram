import { IInput } from 'components/Shared/BuildInputs/BuildInput.types';
import { IOption } from 'LogicServices/Shared/Types';
import trashIcon from 'Static/Assets/Icons/delete.svg';
import { ICommandCreator } from '~/LogicServices/Commands/Creator/Types';

export const inputNames = {
  name: 'name',
  command: 'telCommand',
  description: 'description',
  userType: 'userTypeId',
  commandType: 'commandTypeId',
  response: 'response',
  fileName: 'fileName',
  url: 'url',
  parameter: 'parameter',
  nestedCommands: 'nestedCommands'
};

interface IInputConfigProps {
  language: {
    [key: string]: string;
  };
  command: ICommandCreator;
  onChangeInputs: (e: any) => void;
  userTypesOptions: IOption[];
  commandTypesOptions: IOption[];
  isAButtonCommand: boolean;
  emptyFields: boolean;
  editMode: boolean;
}

export const generateMainInputs = (
  inputParams: IInputConfigProps
): IInput[] => {
  const {
    language,
    onChangeInputs,
    command,
    userTypesOptions,
    commandTypesOptions,
    emptyFields,
    editMode
  } = inputParams;

  return [
    {
      type: 'text',
      name: inputNames.name,
      title: language.name,
      onChange: onChangeInputs,
      value: command.name,
      emptyFields
    },
    {
      type: 'text',
      name: inputNames.command,
      title: language.command,
      onChange: onChangeInputs,
      value: command.telCommand,
      emptyFields
    },
    {
      type: 'text',
      name: inputNames.description,
      title: language.description,
      onChange: onChangeInputs,
      value: command.description,
      emptyFields,
      correction: true,
      multiline: true
    },
    {
      type: 'select',
      name: inputNames.userType,
      title: language.userType,
      onChange: onChangeInputs,
      value: command.userTypeId || 0,
      list: userTypesOptions,
      emptyFields,
      disabled: editMode
    },
    {
      type: 'select',
      name: inputNames.commandType,
      title: language.commandType,
      onChange: onChangeInputs,
      value: command.commandTypeId || 0,
      list: commandTypesOptions,
      emptyFields,
      disabled: editMode
    },
    {
      type: 'text',
      name: inputNames.response,
      title: language.response,
      onChange: onChangeInputs,
      value: command.botResponses?.response || '',
      emptyFields,
      correction: true,
      multiline: true
    }
  ];
};

export const generateFileInputs = (
  inputParams: IInputConfigProps
): IInput[] => {
  const { language, onChangeInputs, command, emptyFields, editMode } =
    inputParams;

  return [
    {
      type: 'text',
      name: inputNames.fileName,
      title: language.filename,
      onChange: onChangeInputs,
      value: command.botResponses?.botResponseFiles?.filename || '',
      emptyFields,
      disabled: editMode
    },
    {
      type: 'text',
      name: inputNames.url,
      title: language.url,
      onChange: onChangeInputs,
      value: command.botResponses?.botResponseFiles?.url || '',
      emptyFields,
      disabled: editMode
    }
  ];
};

export const generateParameterInput = (inputParams: any) => {
  const {
    language,
    onChangeInputs,
    emptyFields,
    confirmation,
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
  };
};

interface ITableConfig {
  language: {
    [key: string]: string;
  };
  onDeleteCommand: (id: number) => void;
  editMode: boolean;
}

export const NestedCommandTableConfig = (configParams: ITableConfig) => {
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
      custom: (property: any) => property && property.botResponses.description
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
          onClick: (dataset: any) => {
            onDeleteCommand(dataset.botCommand.botCommandId);
          }
        }
      ]
    }
  ];
};
