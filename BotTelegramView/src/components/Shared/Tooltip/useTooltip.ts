import { useState, useCallback, useLayoutEffect } from 'react';
import { IProps } from './Tooltip';

const useTooltip = ({ click, onClick }: Pick<IProps, 'click' | 'onClick'>) => {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (click) {
      setOpen(false);
      onClick(false);
    }
  }, [click]);

  const onCloseTooltip = useCallback(() => {
    setOpen(false);
  }, []);

  const onOpenTooltip = useCallback(() => {
    setOpen(true);
  }, []);

  return { open, onCloseTooltip, onOpenTooltip };
};

export default useTooltip;
