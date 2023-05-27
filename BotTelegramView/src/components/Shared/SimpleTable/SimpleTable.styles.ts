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

export const Container = styled(TableContainer)<ThemeProps>`
  display: flex;
  width: 100%;
  background: ${WHITE};
  border: 1px solid ${BLUE};
  font-size: 16px;
  transition: ${({ theme }) =>
    theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
`;

export const LoaderContainer = styled.div<ThemeProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1265px;
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

export const NoDocumentsFound = styled(Typography)<ThemeProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1265px;
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
