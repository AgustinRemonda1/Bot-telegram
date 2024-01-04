import { IConfig, IDataset } from 'LogicServices/Shared/Types';

export interface IProps {
  config: IConfig[];
  dataset: IDataset[];
  loader: boolean;
}
