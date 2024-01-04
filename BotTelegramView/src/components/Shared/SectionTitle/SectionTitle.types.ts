import { ReactNode } from 'react';
import { IEvent } from '~/LogicServices/Shared/Types';

export interface IProps {
  sectionLabel?: string;
  titleLabel: string;
  correctionLabel?: boolean;
  typeButton?: 'AddButton' | 'CustomButton';
  action?: Function;
  hiddenSectionFrom?: boolean;
  correctionTitle?: boolean;
  buttonProps?: {
    label: string;
    icon: ReactNode;
    disabled: boolean;
  };
}
