export interface OptionInterface {
  id: number;
  name: string;
}

export interface IProps {
  config: any;
  dataset: any;
  loader: boolean;
  title: string;
  onChange: (e: any) => void;
  value: string | number | null;
  list: OptionInterface[] | null;
  disabled?: boolean;
}
