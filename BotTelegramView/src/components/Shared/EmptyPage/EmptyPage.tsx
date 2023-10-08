import React, { FC } from 'react';
import { Layout, Icon, Title, Message } from './EmptyPage.styled';
import { IProps } from './EmptyPage.types';

const EmptyPage: FC<IProps> = ({ title, message, icon, ...props }) => {
  return (
    <Layout {...props}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Layout>
  );
};

export default EmptyPage;
