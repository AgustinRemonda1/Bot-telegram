import { IEvent, IOption } from 'LogicServices/Shared/Types';

export interface IProps {
  title: string;
  onChange: (e: IEvent) => void;
  value: string | number | null;
  name: string;
  emptyFields?: null | string | number | boolean;
  list: IOption[];
  correction?: boolean;
  disabled?: boolean;
}
