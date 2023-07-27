import styled from '@emotion/styled';
import { Container as ContentContainer } from '@mui/material';
import { theme } from 'Static/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  min-height: 30vh;
  overflow-x: hidden;
  transition: ${theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
`;

export const Content = styled(ContentContainer)`
  display: flex;
  justify-items: center;
  justify-content: enter;
  margin-top: ${theme.spacing(12)};
  width: 100%;
  transition: ${theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
  flex-direction: column;
  max-width: 95% !important;
`;

export const ContentSize = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 605px;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
