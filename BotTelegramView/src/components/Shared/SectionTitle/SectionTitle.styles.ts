import styled from '@emotion/styled';
import { BLUE, GOOGLE_BLUE, ORANGE, WHITE } from 'Static/Styles/Colors.index';
import { Typography, Box, IconButton, Theme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface ThemeProps {
  theme: Theme;
}

interface ContainerProps extends ThemeProps {
  isOpenDrawer: boolean;
  correction: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  width: ${({ correction }) => (correction ? '100%' : '100vw')};
  margin-top: ${({ theme, correction }) =>
    correction ? 0 : theme.spacing(15)};
  margin-left: ${({ theme, isOpenDrawer, correction }) =>
    !correction ? (isOpenDrawer ? theme.spacing(45) : theme.spacing(15)) : 0};
  margin-right: ${({ theme, correction }) =>
    correction ? 0 : theme.spacing(7)};
  transition: ${({ theme }) =>
    theme.transitions.create(['margin'], {
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

interface UnderLineProps extends ThemeProps {
  hasAction: Boolean;
}

export const UnderLine = styled(Box)<UnderLineProps>`
  display: flex;
  position: relative;
  border-bottom: 1px ${ORANGE} solid;
  width: 100%;
  bottom: 40px;
  ${({ hasAction }) => hasAction && 'margin-right: 50px;'}
  transition: ${({ theme }) =>
    theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
`;

export const TitleAndUnderlineContainer = styled.div`
  display: flex;
  width: 100%;
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
