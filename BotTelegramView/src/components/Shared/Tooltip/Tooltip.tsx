import React, {
  useState,
  useCallback,
  useLayoutEffect,
  ReactElement
} from 'react';
import Tooltip from '@mui/material/Tooltip';
import useTooltip from './useTooltip';

export interface IProps {
  children: ReactElement;
  title: string;
  click: boolean;
  onClick: (click: boolean) => void;
}

const ControlledTooltips = ({ children, title, click, onClick }: IProps) => {
  const { open, onCloseTooltip, onOpenTooltip } = useTooltip({
    click,
    onClick
  });

  return (
    <Tooltip
      disableFocusListener
      disableTouchListener
      open={open}
      onClose={onCloseTooltip}
      onOpen={onOpenTooltip}
      title={title}
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default ControlledTooltips;
