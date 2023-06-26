import styled from '@emotion/styled';
import { WHITE, BLUE, BLACK } from 'Static/Styles/Colors.index';
import { createTheme, List, Divider, IconButton, Drawer } from '@mui/material';
import { DRAWER_WIDTH } from '../Header.styled';

interface IStyledDrawer {
  open: boolean;
}

const theme = createTheme();

export const MenuModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const StyledDrawer = styled(Drawer)<IStyledDrawer>`
  width: ${({ open }) =>
    open ? `${DRAWER_WIDTH}px` : `${theme.spacing(7) + 1}px`};
  flex-shrink: 0;
  white-space: nowrap;
  background: ${BLUE};
  color: ${WHITE};
  border-right: 1px ${BLACK} solid;
  transition: ${({ open }) =>
    !open
      ? theme.transitions.create(['width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      : theme.transitions.create(['width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })};
  overflowx: ${({ open }) => !open && 'hidden'};

  ${({ open }) =>
    !open &&
    `${[theme.breakpoints.up('sm')]}: {
      width: ${theme.spacing(9) + 1};
    }`}
`;

export const StyledIconButton = styled(IconButton)`
  color: ${BLACK};
  & div: {
    padding-left: 8px;
    & svg: {
      fill: ${WHITE};
    }
  }
`;

export const StyledIcon = styled.div`
  color: ${BLACK};
  & div: {
    padding-left: 8px;
    & svg: {
      fill: ${WHITE};
    }
  }
`;

export const StyledDivider = styled(Divider)`
  background: ${BLACK};
`;

export const HomePageList = styled(List)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  border-top: 1px solid ${BLACK};
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${theme.spacing(0, 1)};
  background: ${BLUE};
  min-height: 56;
  @media (min-width: 0px) : {
    @media (orientation: landscape) : {
      min-height: 48;
    }
  }
  @media (min-width: 600px) : {
    min-height: 64;
  }
`;
