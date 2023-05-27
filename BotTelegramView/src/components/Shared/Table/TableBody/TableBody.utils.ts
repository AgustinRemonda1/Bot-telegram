import { capitalizeStrings } from 'Static/Utils/FormatStrings.utils';

export const renderCell = (cell: any, dataset: any) => {
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
