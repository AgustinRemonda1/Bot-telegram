import { IInput } from 'components/Shared/BuildInputs/BuildInput.types';
import { IPoll } from 'LogicServices/Polls/Types';
import { IOption } from 'LogicServices/Shared/Types';
import trashIcon from 'Static/Assets/Images/delete.svg';

export const inputNames = {
  name: 'name',
  command: 'telCommand',
  description: 'description',
  userType: 'userTypeId',
  commandType: 'commandTypeId',
  response: 'response',
  fileName: 'fileName',
  url: 'url',
  buttonList: 'buttonList',
  coordinates: 'coordinates',
  tableSelect: 'simpleTableSelect'
};

export const inputFirstConfig = (inputParams: any) => {
  const {
    language,
    onChangeInputs,
    command,
    userTypesOptions,
    commandTypesOptions,
    emptyFirstFields,
    confirmation,
    editMode
  } = inputParams;

  return [
    {
      type: 'text',
      name: inputNames.name,
      title: language.name,
      onChange: onChangeInputs,
      value: command.name,
      emptyFields: confirmation && emptyFirstFields && !command.name
    },
    {
      type: 'text',
      name: inputNames.command,
      title: language.command,
      onChange: onChangeInputs,
      value: command.telCommand,
      emptyFields: confirmation && emptyFirstFields && !command.telCommand
    },
    {
      type: 'text',
      name: inputNames.description,
      title: language.description,
      onChange: onChangeInputs,
      value: command.description,
      emptyFields: confirmation && emptyFirstFields && !command.description,
      correction: true,
      multiline: true
    },
    {
      type: 'select',
      name: inputNames.userType,
      title: language.userType,
      onChange: onChangeInputs,
      value: command.userTypeId,
      list: userTypesOptions,
      emptyFields: confirmation && emptyFirstFields && !command.userTypeId,
      disabled: editMode
    },
    {
      type: 'select',
      name: inputNames.commandType,
      title: language.commandType,
      onChange: onChangeInputs,
      value: command.commandTypeId,
      list: commandTypesOptions,
      emptyFields: confirmation && emptyFirstFields && !command.commandTypeId,
      disabled: editMode
    },
    {
      type: 'text',
      name: inputNames.response,
      title: language.response,
      onChange: onChangeInputs,
      value: command.botResponse?.response,
      emptyFields:
        confirmation && emptyFirstFields && !command.botResponse.response,
      correction: true,
      multiline: true
    }
  ];
};

export const inputSecondaryConfig = (inputParams: any) => {
  const {
    language,
    onChangeInputs,
    fileName,
    url,
    emptySecondFields,
    confirmation,
    editMode
  } = inputParams;

  return [
    {
      type: 'text',
      name: inputNames.fileName,
      title: language.filename,
      onChange: onChangeInputs,
      value: fileName,
      emptyFields: confirmation && emptySecondFields && !fileName,
      disabled: editMode
    },
    {
      type: 'text',
      name: inputNames.url,
      title: language.url,
      onChange: onChangeInputs,
      value: url,
      emptyFields: confirmation && emptySecondFields && !url,
      disabled: editMode
    }
  ];
};

export const coordinateOrButtonListInputConfig = (inputParams: any) => {
  const {
    language,
    onChangeInputs,
    emptyFirstFields,
    confirmation,
    isAButtonCommand,
    coordinates,
    buttonList,
    editMode
  } = inputParams;

  return {
    type: 'text',
    name: isAButtonCommand ? inputNames.buttonList : inputNames.coordinates,
    title: isAButtonCommand ? language.buttons : language.coordinates,
    onChange: onChangeInputs,
    value: isAButtonCommand ? buttonList : coordinates,
    emptyFields:
      confirmation && emptyFirstFields && !(coordinates || buttonList),
    correction: true,
    disabled: editMode,
    multiline: true
  };
};

export const NestedCommandTableConfig = (configParams: any) => {
  const { language, handleDeleteNestedCommand, editMode } = configParams;
  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'description'
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
          icon: trashIcon,
          disabled: editMode,
          onClick: (dataset: any) => {
            handleDeleteNestedCommand(dataset.bot_command_id);
          }
        }
      ]
    }
  ];
};
