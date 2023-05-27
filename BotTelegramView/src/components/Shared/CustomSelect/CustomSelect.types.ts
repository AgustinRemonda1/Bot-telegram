export interface IOption {
  id: number;
  name: string;
}

export interface IProps {
  title: string;
  onChange: (e: any) => void;
  value: string | number | null;
  name: string;
  emptyFields?: null | string | number | boolean;
  list: IOption[];
  correction?: boolean;
  disabled?: boolean;
}
