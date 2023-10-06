import styled from '@emotion/styled';
import { GOOGLE_BLUE, WHITE, BLUE } from 'Static/Styles/Colors.index';
import {
  Button,
  Card,
  Container,
  createTheme,
  CircularProgress
} from '@mui/material';

interface IDashboardContainer {
  open: boolean;
}

const theme = createTheme();

export const DashboardContainer = styled.div<IDashboardContainer>`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  min-height: 30vh;
  overflow-x: hidden;
  transition: ${({ open }) =>
    open &&
    theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
`;

export const Content = styled(Container)`
  display: flex;
  justify-items: center;
  justify-content: enter;
  margin-top: ${theme.spacing(12)};
  width: 100%;
  transition: ${theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
  flex-direction: column;
  max-width: 95% !important;
`;

export const SectionContainer = styled.div`
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  & div {
    margin-bottom: 20px;
  }
  ,
  & div:last-child {
    marginright: 0px;
  }
`;

export const StatisticCard = styled(Card)`
  margin-right: 30px;
  width: 100%;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const DashboardButton = styled(Button)`
  float: right;
  padding: 8px 18px;
  background: ${GOOGLE_BLUE};
  color: ${WHITE};
  box-shadow: none;
  margin: 20px 0px;
  &:hover {
    background: ${BLUE};
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
