import React, { ReactNode } from 'react';
import { Toolbar } from '@mui/material';
import {
  HeaderContainer,
  StyledAppBar,
  ContentContainer
} from './Header.styled';
import MenuModal from './MenuModal';
import AppBar from './AppBar';
import useHeader from './useHeader';

interface IProps {
  children: ReactNode;
}

const Header = ({ children }: IProps) => {
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
      <ContentContainer>{children}</ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
