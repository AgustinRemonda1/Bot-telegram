import styled from '@emotion/styled';
import {
  BLUE,
  GOOGLE_BLUE,
  LIGHT_ORANGE,
  ORANGE,
  WHITE
} from 'Static/Styles/Colors.index';
import {
  Typography,
  Box,
  IconButton,
  Theme,
  Button,
  CircularProgress
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { theme } from 'Static/Theme';

interface ContainerProps {
  isOpenDrawer: boolean;
  correction: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  width: ${({ correction }) => (correction ? '100%' : '100vw')};
  margin-top: ${({ correction }) =>
    correction ? theme.spacing(4) : theme.spacing(15)};
  margin-bottom: ${theme.spacing(4)};
  margin-left: ${({ isOpenDrawer, correction }) =>
    !correction ? (isOpenDrawer ? theme.spacing(45) : theme.spacing(15)) : 0};
  margin-right: ${({ correction }) => (correction ? 0 : theme.spacing(7))};
  transition: ${theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
`;

interface TitleProps {
  correction: boolean;
}

export const Title = styled(Typography)<TitleProps>`
  padding-right: 30px;
  white-space: nowrap;
`;

export const SubTitle = styled(Typography)`
  color: ${ORANGE};
  margin-right: 2px;
  padding-left: 2px;
`;

interface UnderLineProps {
  hasAction: Boolean;
}

export const UnderLine = styled(Box)<UnderLineProps>`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px ${ORANGE} solid;
  width: 100%;
  ${({ hasAction }) => hasAction && 'margin-right: 20px;'}
  transition: ${theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
`;

export const TitleAndUnderlineContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  && div {
    display: flex;
    flex-wrap: inherit;
    flex-direction: row;
  }
`;

export const AddButton = styled(IconButton)`
  margin-bottom: 20px;
  margin-right: 7px;
  background: ${GOOGLE_BLUE};
  &:hover {
    background: ${BLUE};
  }
`;

export const AddIconColored = styled(AddIcon)`
  fill: ${WHITE};
`;

export const CustomButton = styled(Button)`
  max-width: 230px;
  min-width: auto;
  text-overflow: ellipsis;
  white-space: pre;
  padding: 8px 18px;
  background: ${ORANGE};
  color: ${WHITE};
  box-shadow: none;
  margin-bottom: 10px;
  &:hover {
    background: ${LIGHT_ORANGE};
  }
`;

export const IconContainer = styled.span`
  position: relative;
  top: 4px;
  right: 5px;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 22%;
`;

export const Loader = styled(CircularProgress)`
  z-index: 1;
`;
