import { IEvent } from 'LogicServices/Shared/Types';

export interface IPollQuestion {
  pollId: null | number;
  question: string;
  description: string;
}

export interface IInputQuestions {
  type: string;
  name: string;
  title: string;
  onChange: (e: IEvent) => void;
  value: string;
  correction: boolean;
}
