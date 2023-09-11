import { IDataset } from './Types';

export const searchAttribute = (dataset: IDataset, item: string): any => {
  const route = item.split('.');
  const attribute = String(route.shift());

  if (route.length > 0) {
    return searchAttribute(dataset[attribute], route.join('.'));
  }
  try {
    return dataset[attribute];
  } catch {
    return true;
  }
};

export const validator = (dataset: IDataset, list: string[]) => {
  const toValidate = list.map((item) => searchAttribute(dataset, item));

  return toValidate.every((item) => Boolean(item));
};
