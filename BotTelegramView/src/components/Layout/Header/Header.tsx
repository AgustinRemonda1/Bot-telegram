import React from 'react';
import { Toolbar } from '@mui/material';
import { HeaderContainer, StyledAppBar } from './Header.styled';
import MenuModal from './MenuModal';
import AppBar from './AppBar';
import useHeader from './useHeader';

const Header = () => {
  const { state, actions } = useHeader();

  return (
    <HeaderContainer>
      <StyledAppBar position="fixed" open={state.open}>
        {state.auth && (
          <Toolbar>
            <AppBar props={state} actions={actions} />
          </Toolbar>
        )}
      </StyledAppBar>
      {state.auth && <MenuModal />}
    </HeaderContainer>
  );
};

export default Header;
