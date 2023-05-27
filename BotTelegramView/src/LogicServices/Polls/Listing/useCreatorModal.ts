import { useState, useCallback } from 'react';
import usePopUp from 'LogicServices/Shared/usePopUp';
import { IPoll } from '../Types';

const useCreatorModal = () => {
  const [poll, setPoll] = useState<IPoll | null>(null);
  const { state, actions } = usePopUp();

  const onOpen = useCallback(
    (dataset?: IPoll) => {
      dataset && setPoll(dataset);
      actions.onOpen();
    },
    [actions]
  );

  const onClose = useCallback(() => {
    setPoll(null);
    actions.onClose();
  }, [actions]);

  return {
    state: {
      ...state,
      poll
    },
    actions: { onOpen, onClose }
  };
};

export default useCreatorModal;
