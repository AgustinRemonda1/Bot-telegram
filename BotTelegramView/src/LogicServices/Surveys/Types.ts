import { IUserType } from 'LogicServices/UserTypes/Types';

export interface IQuestion {
  questionId?: number | string;
  questionResponseId?: number | string;
  question: string;
  description: string;
  typeQuestion?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IResponse {
  responseId?: number | string;
  questionId?: number | string;
  responsesId?: number | string;
  response: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IResponses {
  responsesId?: number | string;
  questionResponseId?: number | string;
  response: IResponse[];
  createdAt?: string;
  updatedAt?: string;
}

export interface IQuestionResponse {
  questionResponseId?: number | string;
  surveyId?: number | string;
  questions: IQuestion[];
  responses?: IResponses[];
}

export interface ISurvey {
  surveyId?: number;
  name: string;
  description: string;
  userTypeId: number;
  userType?: IUserType;
  questionResponse: IQuestionResponse;
  createdAt?: string;
  updatedAt?: string;
}
