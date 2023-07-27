import styled from '@emotion/styled';
import { SUTIL_GRAY, WHITE } from 'Static/Styles/Colors.index';
import { TableContainer, CircularProgress, Typography } from '@mui/material';
import { theme } from 'Static/Theme';

export const Container = styled(TableContainer)`
  display: flex;
  width: 100%;
  background: ${WHITE};
  border: 1px solid ${SUTIL_GRAY};
  font-size: 16px;
  transition: ${theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
`;

export const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1265px;
  height: 100%;
  max-height: 435px;
  margin-top: ${theme.spacing(38)};
  transition: ${theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
`;

export const Loader = styled(CircularProgress)`
  z-index: 1;
`;

export const NoDocumentsFound = styled(Typography)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1265px;
  height: 100%;
  max-height: 435px;
  margin-top: ${theme.spacing(38)};
  color: ${WHITE};
  transition: ${theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
`;
