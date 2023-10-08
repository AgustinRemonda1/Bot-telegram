import styled from '@emotion/styled';
import { Button, Typography, CircularProgress } from '@mui/material';
import {
  WHITE,
  RED_ALERT,
  GRAY,
  ORANGE,
  LIGHT_ORANGE
} from 'Static/Styles/Colors.index';

export const Container = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  margin-top: 35px;
  max-width: 1000px;
  width: 100%;
`;

export const LoginContainer = styled.div`
  background: #fff;
  max-width: 1000px;
  display: flex;
  width: 100%;
  max-height: 69%;
  height: auto;
  flex-direction: row;
  align-items: center;
  border: ${GRAY} 1px solid;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin-top: 0;
  padding: 0 50px;
`;

export const IconContainer = styled.div`
  margin-top: 65px;
  margin-bottom: 35px;
  & > div {
    filter: invert(45%) sepia(49%) saturate(5557%) hue-rotate(1deg)
      brightness(102%) contrast(105%);
    & svg {
      height: 100px;
      width: 100px;
    }
  }
`;

export const LoginImage = styled.img`
  max-width: 500px;
  width: auto;
  height: auto;
  max-height: 100%;
  min-height: 100%;
  min-width: 500px;
  object-fit: cover;
`;

export const AlertLabel = styled(Typography)`
  font-size: 15px;
  color: ${RED_ALERT};
`;

export const SubmitButton = styled(Button)`
  margin: 0;
  margin-top: 115px;
  margin-bottom: 50px;
  padding: 8px 18px;
  background: ${ORANGE};
  color: ${WHITE};
  box-shadow: none;
  &:hover {
    background: ${LIGHT_ORANGE};
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 7%;
`;

export const Loader = styled(CircularProgress)`
  z-index: 1;
`;
