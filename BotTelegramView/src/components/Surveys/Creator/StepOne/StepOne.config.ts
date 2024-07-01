import { IInput } from 'components/Shared/BuildInputs/BuildInput.types';
import { ISurvey } from 'LogicServices/Surveys/Types';
import { IEvent, IOption } from 'LogicServices/Shared/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';

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

interface IInputConfigProps {
  language: ILanguage;
  survey: ISurvey;
  questionNumber: number;
  onChange: (e: IEvent) => void;
  onChangeQuestionNumber: (e: IEvent) => void;
  emptyFields: boolean;
  userTypes: IOption[];
}

export const generateInputConfig = ({
  language,
  survey,
  onChange,
  questionNumber,
  onChangeQuestionNumber,
  emptyFields,
  userTypes
}: IInputConfigProps): IInput[] => {
  return [
    {
      type: 'text',
      name: inputNames.name,
      title: language.name,
      onChange,
      value: survey.name,
      emptyFields
    },
    {
      type: 'select',
      name: inputNames.userType,
      title: language.userType,
      onChange,
      value: String(survey.userTypeId),
      list: userTypes,
      emptyFields
    },
    {
      type: 'text',
      name: inputNames.description,
      title: language.description,
      onChange,
      value: survey.description,
      emptyFields,
      correction: true,
      multiline: true
    },
    {
      type: 'select',
      title: language.numberOfQuestions,
      name: inputNames.numberOfQuestions,
      value: questionNumber,
      list: numberOfQuestionsConfig,
      onChange: onChangeQuestionNumber,
      emptyFields,
      correction: true
    }
  ];
};

export const inputNames = {
  name: 'name',
  description: 'description',
  userType: 'userType',
  numberOfQuestions: 'numberOfQuestions'
};
