export interface IAction {
  type: string;
  id: string;
  title: string;
  disabled?: (dataset: any) => boolean | boolean;
  icon: any;
  onClick: (dataset: any) => void;
}

export interface IProps {
  actions: IAction[];
  dataset: any;
}
