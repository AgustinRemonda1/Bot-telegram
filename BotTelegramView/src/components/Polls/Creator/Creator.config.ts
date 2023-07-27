import { IInput } from 'components/Shared/BuildInputs/BuildInput.types';
import { IPoll } from 'LogicServices/Polls/Types';
import { IOption } from 'LogicServices/Shared/Types';

interface IInputConfigProps {
  language: {
    [key: string]: string;
  };
  poll: IPoll;
  onChange: (e: any) => void;
  emptyFields: boolean;
  userTypes: IOption[];
}

export const generateInputConfig = ({
  language,
  poll,
  onChange,
  emptyFields,
  userTypes
}: IInputConfigProps): IInput[] => {
  return [
    {
      type: 'text',
      name: inputNames.name,
      title: language.name,
      onChange,
      value: poll.name,
      emptyFields
    },
    {
      type: 'select',
      name: inputNames.userType,
      title: language.userType,
      onChange,
      value: String(poll.userTypeId),
      list: userTypes,
      emptyFields
    },
    {
      type: 'text',
      name: inputNames.description,
      title: language.description,
      onChange,
      value: poll.description,
      emptyFields,
      correction: true,
      multiline: true
    }
  ];
};

export const inputNames = {
  name: 'name',
  description: 'description',
  userType: 'userType',
  numberOfQuestions: 'numberOfQuestions'
};

export const numberOfQuestionsConfig = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
  { id: 10, name: '10' }
];
