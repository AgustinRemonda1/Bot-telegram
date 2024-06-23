import { useCallback } from 'react';
import { useModalControllerContext } from 'components/HOC/ModalController';
import useAuth from 'LogicServices/Auth/Auth/useAuth';
import { useRouter } from 'next/router';

interface IProps {
  onCloseMenu: () => void;
}

const useAppBar = ({ onCloseMenu }: IProps) => {
  const { isOpenDrawer, setOpenState } = useModalControllerContext();
  const { action } = useAuth();
  const router = useRouter();

  const onOpenDrawer = useCallback(() => {
    setOpenState(true);
  }, []);

  const onSignOut = useCallback(() => {
    action.onSignOut();
    onCloseMenu();
  }, [action, onCloseMenu]);

  const onRedirectToConfigurations = useCallback(() => {
    router.replace('/Auth/Config');
  }, [router]);

  return {
    state: { open: isOpenDrawer },
    actions: { onOpenDrawer, onSignOut, onRedirectToConfigurations }
  };
};

export default useAppBar;
