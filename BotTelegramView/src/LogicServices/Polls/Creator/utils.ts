import { IQuestion } from 'LogicServices/Polls/Types';

export const createArrayIterator = (num: number) => {
  return Array(num).fill(null);
};

export const buildQuestions = (): IQuestion => {
  return {
    pollId: '',
    question: '',
    description: ''
  };
};
