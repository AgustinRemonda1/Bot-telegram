import { IInput } from 'components/Shared/BuildInputs/BuildInput.types';
import { IOption } from 'LogicServices/Shared/Types';
import { IInputConfigProps } from '../../Creator/Creator.types';

export const inputNames = {
  name: 'name',
  command: 'telCommand',
  description: 'description',
  userType: 'userTypeId',
  commandType: 'commandTypeId',
  response: 'response'
};

export interface IMainInputConfigProps extends IInputConfigProps {
  userTypesOptions: IOption[];
  commandTypesOptions: IOption[];
}

export const generateMainInputs = (
  inputParams: IMainInputConfigProps
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
