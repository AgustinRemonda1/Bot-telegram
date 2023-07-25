export interface IProps {
  title: string;
  onChange: (e: any) => void;
  value: string | null;
  name: string;
  emptyFields?: null | string | number | boolean;
  correction?: boolean;
  disabled?: boolean;
  multiline?: boolean;
}
