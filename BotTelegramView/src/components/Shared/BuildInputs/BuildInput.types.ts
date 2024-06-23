import { IEvent } from 'LogicServices/Shared/Types';

export interface IOption {
  id: number;
  name: string;
}

export interface IInput {
  type: string;
  title: string;
  onChange: (e: IEvent) => void;
  value: string | null | number;
  name: string;
  list?: IOption[] | null;
  fileValues?: {
    filename: string;
    extension: string;
  };
  fileTargets?: {
    file: string;
    extension: string;
  };
  emptyFields?: null | string | number | boolean;
  correction?: boolean;
  disabled?: boolean;
  multiline?: boolean;
}

export interface IProps {
  input: IInput;
}
