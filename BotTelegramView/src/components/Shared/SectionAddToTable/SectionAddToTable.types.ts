import { IConfig, IDataset, IEvent, IOption } from 'LogicServices/Shared/Types';

export interface IProps {
  config: IConfig[];
  dataset: IDataset;
  name: string;
  loader: boolean;
  title: string;
  onChange: (e: IEvent) => void;
  value?: string | number | null;
  list: IOption[] | null;
  disabled?: boolean;
}
