import { ReactNode } from 'react';

export interface IProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  loading: boolean;
  onSave: () => void;
}
