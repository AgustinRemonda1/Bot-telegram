import { IQuestion, IPoll } from 'LogicServices/Polls/Types';
import BuildInputs from 'components/Shared/BuildInputs';
import { IInputQuestions } from './Creator.types';

interface ICreateInputs {
  index: number;
  language: {
    [key: string]: string;
  };
  value: string;
  hasEmptyFields: boolean;
  onChangeQuestions: (e: any, index: number) => void;
}

export const createInputQuestions = (params: ICreateInputs) => {
  const { onChangeQuestions, index, language, value, hasEmptyFields } = params;
  return {
    type: 'text',
    name: 'question' + index,
    title: language.question + ' ' + (index + 1),
    onChange: (e: any) => onChangeQuestions(e, index),
    value,
    correction: true,
    emptyFields: !value && hasEmptyFields
  };
};

interface IGenerateInputs {
  poll: IPoll;
  language: {
    [key: string]: string;
  };
  hasEmptyFields: boolean;
  onChangeQuestions: (e: any, index: number) => void;
}

export const generateInputQuestions = ({
  poll,
  language,
  onChangeQuestions,
  hasEmptyFields
}: IGenerateInputs) => {
  const questions: IQuestion[] = poll.questions || [];
  const inputQuestions = questions.map((question, index) =>
    createInputQuestions({
      language,
      index,
      onChangeQuestions,
      value: question.question,
      hasEmptyFields
    })
  );

  return inputQuestions.map((input: IInputQuestions, index: number) => (
    <BuildInputs key={index} input={input} />
  ));
};
