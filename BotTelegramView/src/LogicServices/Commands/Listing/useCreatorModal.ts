import { useState, useCallback } from 'react';
import usePopUp from 'LogicServices/Shared/usePopUp';
import { ICommand } from '../Types';

const useCreatorModal = () => {
  const [command, setCommand] = useState<ICommand | null>(null);
  const { state, actions } = usePopUp();

  const onOpen = useCallback(
    (dataset?: ICommand) => {
      dataset && setCommand(dataset);
      actions.onOpen();
    },
    [actions]
  );

  const onClose = useCallback(() => {
    setCommand(null);
    actions.onClose();
  }, [actions]);

  return {
    state: {
      ...state,
      command
    },
    actions: { onOpen, onClose }
  };
};

export default useCreatorModal;
