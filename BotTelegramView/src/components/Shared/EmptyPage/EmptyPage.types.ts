import { ReactNode, HTMLAttributes } from 'react';

export interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  message: ReactNode;
  icon: ReactNode;
}
