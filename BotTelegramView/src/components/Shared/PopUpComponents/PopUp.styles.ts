import styled from '@emotion/styled';
import { createTheme, Typography } from '@mui/material';
import MuiDialogTitle from '@mui/material/DialogTitle';
import { WHITE, BLUE } from 'Static/Styles/Colors.index';

const theme = createTheme();

export const Text = styled(Typography)`
  display: block;
  color: ${WHITE};
`;

export const DialogTitle = styled(MuiDialogTitle)`
  margin: 0;
  padding: ${theme.spacing(1)};
  padding-left: ${theme.spacing(1)};
  background: ${BLUE};
`;
