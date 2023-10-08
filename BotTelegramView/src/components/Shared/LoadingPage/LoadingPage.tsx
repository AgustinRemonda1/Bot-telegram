import React from 'react';
import { Layout, LoaderContainer } from './LoadingPage.styled';
import { CircularProgress } from '@mui/material';

const LoadingPage = () => {
  return (
    <Layout>
      <LoaderContainer>
        <CircularProgress size={50} />
      </LoaderContainer>
    </Layout>
  );
};

export default LoadingPage;
