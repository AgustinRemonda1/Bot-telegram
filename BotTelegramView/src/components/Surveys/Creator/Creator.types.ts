import { IEvent } from 'LogicServices/Shared/Types';

export interface IOption {
  id: number;
  name: string;
}

export interface ISurveyQuestion {
  surveyId: null | number;
  question: string;
  description: string;
}

export interface IInputQuestions {
  type: string;
  name: string;
  title: string;
  onChange: (e: IEvent) => void | ((e: IEvent, num: number) => void);
  value: string;
  correction: boolean;
}
