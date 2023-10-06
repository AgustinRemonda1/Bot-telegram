import React, { useContext } from 'react';
import { TextField, Typography, Container } from '@mui/material';
import {
  LoginContainer,
  FormContainer,
  SubmitButton,
  AlertLabel,
  LoaderContainer,
  Loader
} from './Login.styled';
import { inputNames } from './Login.config';
import useLogin from 'LogicServices/Auth/Login/useLogin';
import { LanguageContext } from 'Static/Lang/Lang.lang';

const Login = () => {
  const { state, actions } = useLogin();
  const { language } = useContext(LanguageContext);

  return (
    <Container component="main" maxWidth="xs">
      <LoginContainer>
        <Typography component="h1" variant="h5">
          {language.signIn}
        </Typography>
        <FormContainer noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={inputNames.username}
            label={language.username}
            name={inputNames.username}
            autoComplete={inputNames.username}
            autoFocus
            onChange={actions.onChange}
            value={state.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name={inputNames.password}
            label={language.password}
            type={inputNames.password}
            id={inputNames.password}
            autoComplete="current-password"
            onChange={actions.onChange}
            onKeyDown={actions.onEnter}
            value={state.password}
          />
          {state.error && (
            <AlertLabel variant="subtitle1">{state.error}</AlertLabel>
          )}
          <SubmitButton
            fullWidth
            variant="contained"
            disabled={state.loading}
            onClick={actions.onLogin}
          >
            {language.signIn}
            {state.loading && (
              <LoaderContainer>
                <Loader size={35} />
              </LoaderContainer>
            )}
          </SubmitButton>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
