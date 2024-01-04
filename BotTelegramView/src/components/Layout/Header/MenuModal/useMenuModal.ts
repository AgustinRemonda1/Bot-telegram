import { useContext, useCallback } from 'react';
import { ModalControllerContext } from 'components/HOC/ModalController';
import { useRouter } from 'next/router';

const useMenuModal = () => {
  const { isOpenDrawer, setOpenState } = useContext(ModalControllerContext);
  const router = useRouter();

  const onCloseDrawer = useCallback((): void => {
    setOpenState(false);
  }, [setOpenState]);

  const onChangeRoute = useCallback(
    (route?: string): void => {
      if (route && router) {
        router.replace(route);
      }
    },
    [setOpenState, router]
  );

  return {
    open: isOpenDrawer,
    onCloseDrawer,
    onChangeRoute
  };
};

export default useMenuModal;
