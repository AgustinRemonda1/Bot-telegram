import { useCallback, useContext } from 'react';
import { ModalControllerContext } from 'components/HOC/ModalController';
import useAuth from 'LogicServices/Auth/Auth/useAuth';

interface IProps {
  onCloseMenu: () => void;
}

const useAppBar = ({ onCloseMenu }: IProps) => {
  const { isOpenDrawer, setOpenState } = useContext(ModalControllerContext);
  const { action } = useAuth();

  const onOpenDrawer = useCallback(() => {
    setOpenState(true);
  }, []);

  const onSignOut = useCallback(() => {
    action.onSignOut();
    onCloseMenu();
  }, [action, onCloseMenu]);

  return {
    state: { open: isOpenDrawer },
    actions: { onOpenDrawer, onSignOut }
  };
};

export default useAppBar;
