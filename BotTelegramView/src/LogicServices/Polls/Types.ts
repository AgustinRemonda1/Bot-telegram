import { IUserType } from 'LogicServices/UserTypes/Types';

export interface IQuestion {
  pollQuestionId?: number | string;
  pollId: number | string;
  question: string;
  description: string;
  typeQuestion?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IPoll {
  pollId?: number;
  name: string;
  description: string;
  userTypeId: number;
  userType?: IUserType;
  questions: IQuestion[];
  createdAt?: string;
  updatedAt?: string;
}
