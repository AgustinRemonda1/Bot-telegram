export interface IProps {
  open: boolean;
  onClose: () => void;
  children: any;
  title: string;
  loading: boolean;
  onSave: () => void;
}
