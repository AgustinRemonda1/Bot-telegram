import { ReactNode } from 'react';

export interface IOption {
  id: number;
  name: string;
}

export interface IDataset {
  [key: string]: any;
}

export interface IEvent {
  target: { name: string; value: string };
}

export interface IAction {
  type: string;
  id: string;
  title: string;
  icon: string;
  disabled?: boolean | Function;
  onClick: Function;
}

export interface IConfig {
  name: string;
  property: string;
  nestedTable?: string;
  custom?: (dataset: IDataset) => ReactNode;
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify';
  isAction?: boolean;
  actions?: IAction[];
  [key: string]: any;
}
