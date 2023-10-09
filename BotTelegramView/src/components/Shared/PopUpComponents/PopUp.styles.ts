import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import MuiDialogTitle from '@mui/material/DialogTitle';
import { WHITE, LIGHT_BLUE } from 'Static/Styles/Colors.index';
import { theme } from 'Static/Theme';

export const Text = styled(Typography)`
  display: block;
  color: ${WHITE};
`;

export const DialogTitle = styled(MuiDialogTitle)`
  margin: 0;
  padding: ${theme.spacing(1)};
  padding-left: ${theme.spacing(2)};
  background: ${LIGHT_BLUE};
`;
