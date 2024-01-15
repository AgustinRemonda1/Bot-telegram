import React, { useState, createContext, ReactNode, useContext } from 'react';

export const ModalControllerContext = createContext({
  isOpenDrawer: false,
  setOpenState: (open: boolean) => {}
});

export const useModalControllerContext = () =>
  useContext(ModalControllerContext);

interface IProps {
  children: ReactNode;
}

const ModalController = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalControllerContext.Provider
      value={{
        isOpenDrawer: open,
        setOpenState: setOpen
      }}
    >
      {children}
    </ModalControllerContext.Provider>
  );
};

export default ModalController;
