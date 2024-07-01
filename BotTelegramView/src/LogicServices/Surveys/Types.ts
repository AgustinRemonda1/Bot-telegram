import { IUserType } from 'LogicServices/UserTypes/Types';

export interface IQuestion {
  surveyQuestionId?: number | string;
  surveyId: number | string;
  question: string;
  description: string;
  typeQuestion?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISurvey {
  surveyId?: number;
  name: string;
  description: string;
  userTypeId: number;
  userType?: IUserType;
  questions: IQuestion[];
  createdAt?: string;
  updatedAt?: string;
}
