import { IQuestion, IResponse } from 'LogicServices/Surveys/Types';

export const getResponse = (question: IQuestion, responses: IResponse[]) => {
  const response = responses.find(
    (response) => response.questionId === question.questionId
  );

  return response ? response.response : '';
};
