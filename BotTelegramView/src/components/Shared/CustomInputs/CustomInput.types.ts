import { IEvent } from 'LogicServices/Shared/Types';

export interface IProps {
  title: string;
  onChange: (e: IEvent) => void;
  value: string | number | null;
  name: string;
  emptyFields?: null | string | number | boolean;
  correction?: boolean;
  disabled?: boolean;
  multiline?: boolean;
}
