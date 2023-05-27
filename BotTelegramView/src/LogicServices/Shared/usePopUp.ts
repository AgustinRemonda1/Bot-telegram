import { useState, useCallback } from 'react';

const usePopUp = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  return {
    state: { open },
    actions: { onClose, onOpen }
  };
};

export default usePopUp;
