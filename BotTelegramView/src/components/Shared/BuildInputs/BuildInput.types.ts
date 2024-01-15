import { IEvent } from 'LogicServices/Shared/Types';

export interface IOption {
  id: number;
  name: string;
}

export interface IInput {
  type: string;
  title: string;
  onChange: (e: IEvent) => void | ((e: IEvent, num: number) => void);
  value: string | null | number;
  name: string;
  list?: IOption[] | null;
  emptyFields?: null | string | number | boolean;
  correction?: boolean;
  disabled?: boolean;
  multiline?: boolean;
}

export interface IProps {
  input: IInput;
}
