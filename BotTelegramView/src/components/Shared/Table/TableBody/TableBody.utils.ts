import { capitalizeStrings } from 'Static/Utils/FormatStrings.utils';
import { IConfig, IDataset } from 'LogicServices/Shared/Types';

export const renderCell = (cell: IConfig, dataset: IDataset) => {
  if (cell.nestedTable) {
    const relationFound = dataset && dataset[cell.nestedTable];
    const property = relationFound && relationFound[cell.property];
    const stringCell = String(property);

    return capitalizeStrings(stringCell);
  } else if (cell.custom) {
    const property = dataset[cell.property];

    return cell.custom(property);
  }
  return dataset[cell.property];
};
