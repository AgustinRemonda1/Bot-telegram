export interface IOption {
  name: string;
  value: string;
}

export interface IProps {
  title?: string | null;
  listOptions: IOption[];
  onChange: (e: any) => void;
  value: string;
}
