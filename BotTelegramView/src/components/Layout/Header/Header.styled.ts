import styled from '@emotion/styled';
import { BLACK, BLUE } from 'Static/Styles/Colors.index';
import { AppBar } from '@mui/material';
import { theme } from 'Static/Theme';

interface IStyledAppBar {
  open: boolean;
}

export const DRAWER_WIDTH = 300;

export const HeaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const StyledAppBar = styled(AppBar)<IStyledAppBar>`
  background: ${BLUE};
  box-shadow: none;
  min-height: 48px;
  margin-left: ${({ open }) => open && `${DRAWER_WIDTH}px`};
  z-index: ${theme.zIndex.drawer + 1};
  transition: ${({ open }) =>
    !open
      ? theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      : theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })};
  color: ${BLACK};
  border-left: ${({ open }) => open && `1px ${BLACK} solid`};

  & .css-hyum1k-MuiToolbar-root {
    padding-left: 8px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;
