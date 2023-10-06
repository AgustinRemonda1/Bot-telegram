import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from 'Static/Theme';
import LanguageProvider from 'components/HOC/LanguageProvider';
import ModalController from '~/components/HOC/ModalController/ModalController.hoc';
import Header from '~/components/Layout/Header/Header';

if (process.env.NEXT_PUBLIC_MOCKING === 'ENABLED') {
  require('Static/mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <ModalController>
          <Header>
            <Component {...pageProps} />
          </Header>
        </ModalController>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
