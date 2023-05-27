import styled from '@emotion/styled';
import { GOOGLE_BLUE, WHITE, BLACK, BLUE } from 'Static/Styles/Colors.index';
import { Typography, Button, CircularProgress, Drawer } from '@mui/material';

interface SpacingProp {
  spacing: Function;
}

export const StyledDrawer = styled(Drawer)`
  overflow-y: hidden;
`;

export const Header = styled.div<SpacingProp>`
  margin: 0;
  padding: ${({ spacing }) => spacing(1)};
  padding-left: ${({ spacing }) => spacing(2)};
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
  background: ${GOOGLE_BLUE};
  color: ${WHITE};
  box-shadow: none;
  &:hover {
    background: ${BLUE};
  }
`;

export const CloseButton = styled(Button)<SpacingProp>`
  margin-right: ${({ spacing }) => spacing(4)};
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
