export interface IOption {
  id: number;
  name: string;
}

export interface IPollQuestion {
  pollId: null | number;
  question: string;
  description: string;
}

export interface IInputQuestions {
  type: string;
  name: string;
  title: string;
  onChange: any;
  value: string;
  correction: boolean;
}
