import { IConfig, IDataset } from 'LogicServices/Shared/Types';

export interface IProps {
  config: IConfig[];
  dataset: IDataset[];
  loader: boolean;
  totalRows: number;
  onChangePage?: (page: number, pageSize: number) => void;
  onRefreshTable?: (refresh: boolean) => void;
  refreshTable?: boolean;
}
