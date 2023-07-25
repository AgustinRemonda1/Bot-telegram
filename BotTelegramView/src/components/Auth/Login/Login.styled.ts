import styled from '@emotion/styled';
import { Button, Typography, CircularProgress } from '@mui/material';
import {
  BLUE,
  GOOGLE_BLUE,
  WHITE,
  RED_ALERT
} from 'Static/Styles/Colors.index';

export const LoginContainer = styled.div`
  margin-top: 30vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${GOOGLE_BLUE};
  border-top: 5px solid ${GOOGLE_BLUE};
  border-bottom: 6px solid ${GOOGLE_BLUE};
`;

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 0;
`;

export const AlertLabel = styled(Typography)`
  font-size: 15px;
  color: ${RED_ALERT};
`;

export const SubmitButton = styled(Button)`
  margin: 0;
  margin-right: 28px;
  padding: 8px 18px;
  background: ${GOOGLE_BLUE};
  color: ${WHITE};
  box-shadow: none;
  &:hover {
    background: ${BLUE};
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 7%;
`;

export const Loader = styled(CircularProgress)`
  z-index: 1;
`;
