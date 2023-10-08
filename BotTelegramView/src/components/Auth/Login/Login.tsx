import React, { useContext } from 'react';
import { TextField, Typography } from '@mui/material';
import {
  Container,
  LoginContainer,
  FormContainer,
  IconContainer,
  LoginImage,
  SubmitButton,
  AlertLabel,
  LoaderContainer,
  Loader,
  SectionContainer
} from './Login.styled';
import { inputNames } from './Login.config';
import useLogin from 'LogicServices/Auth/Login/useLogin';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import Img from 'Static/Assets/Images/botchat.jpg';
import BotLogo from 'Static/Assets/Icons/logo-bot.svg';
import { ReactSVG } from 'react-svg';
import SectionTitle from 'components/Shared/SectionTitle';

const Login = () => {
  const { state, actions } = useLogin();
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <SectionContainer>
        <SectionTitle
          titleLabel={language.botBackoffice}
          sectionLabel={language.welcomeTo}
        />
      </SectionContainer>
      <LoginContainer>
        <LoginImage src={Img.src} />
        <FormContainer noValidate>
          <IconContainer>
            <ReactSVG src={BotLogo.src} />
          </IconContainer>
          <Typography component="h1" variant="h4">
            {language.signIn}
          </Typography>
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
            style={{ marginTop: '45px' }}
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
