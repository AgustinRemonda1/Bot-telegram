import styled from '@emotion/styled';
import { BLUE, WHITE } from 'Static/Styles/Colors.index';
import {
  TableContainer,
  CircularProgress,
  Typography,
  Theme
} from '@mui/material';

interface ThemeProps {
  theme: Theme;
}

interface DrawerProps extends ThemeProps {
  isOpenDrawer?: Boolean;
  [key: string]: any;
}

export const Container = styled(TableContainer)<DrawerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${WHITE};
  border: 1px solid ${BLUE};
  font-size: 16px;
  transition: ${({ theme }) =>
    theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
  ${({ theme, isOpenDrawer }) =>
    isOpenDrawer && 'margin-left: ' + theme.spacing(45) + ';'}
`;

export const LoaderContainer = styled.div<DrawerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${({ isOpenDrawer }) => (isOpenDrawer ? '1022px' : '1265px')};
  height: 100%;
  max-height: 435px;
  margin-top: ${({ theme }) => theme.spacing(38)};
  transition: ${({ theme }) =>
    theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
`;

export const Loader = styled(CircularProgress)`
  z-index: 1;
`;

export const NoDocumentsFound = styled(Typography)<DrawerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${({ isOpenDrawer }) => (isOpenDrawer ? '1022px' : '1265px')};
  height: 100%;
  max-height: 435px;
  margin-top: ${({ theme }) => theme.spacing(38)};
  color: ${WHITE};
  transition: ${({ theme }) =>
    theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
`;
