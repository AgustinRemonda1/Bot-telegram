import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from 'Static/Theme';
import LanguageProvider from 'components/HOC/LanguageProvider';

if (process.env.NEXT_PUBLIC_MOCKING === 'ENABLED') {
  require('Static/mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
