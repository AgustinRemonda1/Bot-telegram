import styled from '@emotion/styled';
import { Container as ContentContainer } from '@mui/material';
import { theme } from 'Static/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  margin-bottom: 30px;
  flex-grow: 1;
  width: 100%;
  height: auto;
  min-height: 30vh;
  overflow-x: hidden;
  transition: ${theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
`;

export const Content = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing(12)};
  width: 100%;
  transition: ${theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
  flex-direction: column;
  max-width: 95% !important;
`;

export const CenterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CreatorContent = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const StepperContent = styled.div`
  padding-top: 20px;
  width: 95%;
  max-height: 100%;
  min-height: 60vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
`;

export const StepperFooter = styled.div`
  padding-top: 40px;
  width: 87.5%;
  max-height: 100%;
  display: flex;
  justify-content: flex-end;
  & button {
    margin-left: 30px;
  }
`;

export const SectionTitleContent = styled.div`
  width: 70%;
`;

interface IPropsContainer {
  correction?: boolean;
}

export const InputContainer = styled.div<IPropsContainer>`
  width: ${({ correction }) => (!correction ? '44%' : '92%')};
`;
