export interface IOption {
  id: number;
  name: string;
}

export interface IInput {
  type: string;
  title: string;
  onChange: (e: any) => void;
  value: string | null;
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
