import styled from '@emotion/styled';
import {
  WHITE,
  BLUE,
  YELLOW,
  DARK_YELLOW,
  BLACK
} from 'Static/Styles/Colors.index';
import { Button, Dialog, Typography, createTheme } from '@mui/material';

const theme = createTheme();

interface PopUpProps {
  correction: boolean;
}

export const StyledDialog = styled(Dialog)<PopUpProps>`
  margin-left: ${({ correction }) => (correction ? '265px' : '85px')};
`;

export const PopUpContainer = styled.div`
  border: ${BLUE} solid 1px;
  background: ${WHITE};
`;

export const Text = styled(Typography)`
  display: block;
  color: ${BLACK};
`;

export const ButtonDecline = styled(Button)`
  margin-right: ${theme.spacing(2)};
  padding: 4px 16px;
  color: ${BLACK};
  box-shadow: none;
`;

export const ButtonAccept = styled(Button)`
  margin-right: ${theme.spacing(2)};
  padding: 4px 16px;
  color: ${YELLOW};
  box-shadow: none;
  &:hover {
    background: ${DARK_YELLOW};
  }
`;
