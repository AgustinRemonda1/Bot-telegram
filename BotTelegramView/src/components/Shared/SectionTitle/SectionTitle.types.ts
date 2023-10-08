import { ReactNode } from 'react';

export interface IProps {
  sectionLabel?: string;
  titleLabel: string;
  correctionLabel?: boolean;
  typeButton?: 'AddButton' | 'CustomButton';
  action?: (event?: any) => void;
  hiddenSectionFrom?: boolean;
  correctionTitle?: boolean;
  buttonProps?: {
    label: string;
    icon: ReactNode;
    disabled: boolean;
  };
}
