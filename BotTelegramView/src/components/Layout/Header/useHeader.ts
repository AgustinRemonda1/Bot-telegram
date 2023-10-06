import { useState, useCallback } from 'react';
import useAuth from '~/LogicServices/Auth/Auth/useAuth';

const useHeader = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const { state } = useAuth();

  const onOpenMenu = useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const onCloseMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    state: { ...state, open: Boolean(anchorEl), anchorEl },
    actions: { onOpenMenu, onCloseMenu }
  };
};

export default useHeader;
