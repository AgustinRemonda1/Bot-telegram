import { useState, useEffect, useCallback } from 'react';
import usePopUp from './usePopUp';

export interface IProps {
  onRefresh: (refresh: boolean) => void;
  deleteById: (id: number) => Promise<string>;
}

const useDelete = ({ onRefresh, deleteById }: IProps) => {
  const [id, setId] = useState<number | null>(null);
  const [confirm, setConfirm] = useState<boolean>(false);
  const { state, actions } = usePopUp();

  useEffect(() => {
    const deleteItem = async (id: number) => {
      const result = await deleteById(id);

      if (result !== 'error') {
        onRefresh(true);
        setConfirm(false);
      }
    };
    if (id && confirm) {
      deleteItem(id);
    }
  }, [id, confirm, deleteById]);

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
