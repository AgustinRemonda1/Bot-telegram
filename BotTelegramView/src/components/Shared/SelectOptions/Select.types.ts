import { IEvent } from 'LogicServices/Shared/Types';

export interface IOption {
  name: string;
  value: string;
}

export interface IProps {
  title?: string | null;
  listOptions: IOption[];
  onChange: (e: IEvent) => void;
  value: string;
}
