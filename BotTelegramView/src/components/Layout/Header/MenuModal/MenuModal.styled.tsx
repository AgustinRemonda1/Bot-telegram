import styled from '@emotion/styled';
import {
  WHITE,
  BLUE,
  DARK_BLUE,
  LIGHT_BLUE,
  LIGHT_ORANGE
} from 'Static/Styles/Colors.index';
import { createTheme, List, IconButton, Drawer } from '@mui/material';
import { DRAWER_WIDTH } from '../Header.styled';

interface IProps {
  open: boolean;
}

const theme = createTheme();

export const MenuModalContainer = styled.div<IProps>`
  flex-grow: 1;
  display: flex;
  z-index: ${({ open }) => open && 1300};
  margin: 0px;
`;

export const StyledDrawer = styled(Drawer)<IProps>`
  width: ${({ open }) => (open ? `${DRAWER_WIDTH}px` : `60px`)};
  flex-shrink: 0;
  margin: 0px;
  white-space: nowrap;
  color: ${WHITE};
  height: 100%;
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

  box-shadow: -1px 0px 4px 10px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

  & .MuiPaper-root {
    border-right: 1px ${LIGHT_ORANGE} solid;
  }
`;

export const StyledIconButton = styled(IconButton)`
  color: ${WHITE};

  & div {
    & svg {
      fill: ${WHITE};
    }
  }
`;

export const StyledIcon = styled.div`
  color: ${WHITE};
  & div {
    & svg {
      fill: ${WHITE};
    }
  }
`;

export const OptionList = styled(List)<IProps>`
  width: ${({ open }) => (open ? `${DRAWER_WIDTH}px` : `60px`)};
  overflow-x: hidden;
  height: 100%;
  padding-top: 10px;
  padding-left: 4px;
  padding-right: 4px;
  color: ${WHITE};
  background: ${DARK_BLUE};
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
  & > div:hover {
    background: ${LIGHT_BLUE};
    border-radius: 5px;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${theme.spacing(0, 1)};
  background: ${BLUE};
  min-height: 62px;
  @media (min-width: 0px) : {
    @media (orientation: landscape) : {
      min-height: 48;
    }
  }
  @media (min-width: 600px) : {
    min-height: 64;
  }
`;
