import { useState, useEffect, useCallback } from 'react';
import { deletePoll } from 'RepoServices/Polls';
import usePopUp from 'LogicServices/Shared/usePopUp';

interface IProps {
  onRefresh: (refresh: boolean) => void;
}

const useDelete = ({ onRefresh }: IProps) => {
  const [id, setId] = useState<number | null>(null);
  const [confirm, setConfirm] = useState<boolean>(false);
  const { state, actions } = usePopUp();

  useEffect(() => {
    const deletePollById = async (id: number) => {
      const result = await deletePoll(id);

      if (result !== 'error') {
        onRefresh(true);
        setConfirm(false);
      }
    };
    if (id && confirm) {
      deletePollById(id);
    }
  }, [id, confirm]);

  const onOpen = useCallback(
    (id: number) => {
      setId(id);
      actions.onOpen();
    },
    [actions]
  );

  const onClose = useCallback(() => {
    setId(null);
    actions.onClose();
  }, [actions]);

  const onDelete = useCallback(() => {
    setConfirm(true);
    actions.onClose();
  }, [actions]);

  return {
    state: {
      ...state
    },
    actions: { onOpen, onClose, onDelete }
  };
};

export default useDelete;
