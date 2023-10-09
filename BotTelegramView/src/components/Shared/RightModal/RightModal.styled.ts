import styled from '@emotion/styled';
import {
  WHITE,
  BLACK,
  BLUE,
  ORANGE,
  LIGHT_ORANGE
} from 'Static/Styles/Colors.index';
import { Typography, Button, CircularProgress, Drawer } from '@mui/material';
import { theme } from 'Static/Theme';

export const StyledDrawer = styled(Drawer)`
  overflow-y: hidden;
  z-index: 1250;
  & > div {
    overflow: hidden;
  }
`;

export const Header = styled.div`
  margin: 0;
  padding: ${theme.spacing(1)};
  padding-left: ${theme.spacing(2)};
  background: ${BLUE};
`;

export const Text = styled(Typography)`
  display: block;
  color: ${WHITE};
`;

export const Content = styled.div`
  height: 83vh;
  overflow-y: scroll;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 15px 0px;
`;

export const SubmitButton = styled(Button)`
  margin-right: 28px;
  padding: 8px 18px;
  background: ${ORANGE};
  color: ${WHITE};
  box-shadow: none;
  &:hover {
    background: ${LIGHT_ORANGE};
  }
`;

export const CloseButton = styled(Button)`
  margin-right: ${theme.spacing(4)};
  padding: 8px 18px;
  color: ${BLACK};
  box-shadow: none;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 25%;
  right: 25%;
`;

export const Loader = styled(CircularProgress)`
  z-index: 1;
`;
