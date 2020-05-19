import React, { useState, createContext } from 'react';

export const ModalControllerContext = createContext({
  isOpenDrawer: false,
  setOpenState: () => {}
});

const ModalController = ({children}) => {
  const [ open, setOpen ] = useState(false)
  return(
    <ModalControllerContext.Provider
      value={{
        isOpenDrawer: open,
        setOpenState: setOpen
      }}
    >
      {children}
    </ModalControllerContext.Provider>
  )
}

export default ModalController
