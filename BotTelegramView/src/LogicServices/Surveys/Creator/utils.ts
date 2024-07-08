import { IQuestion } from 'LogicServices/Surveys/Types';

export const createArrayIterator = (num: number) => {
  return Array(num).fill(null);
};

export const buildQuestions = (): IQuestion => {
  return {
    questionId: '',
    questionResponseId: '',
    question: '',
    description: ''
  };
};
