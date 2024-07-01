import React, { FC, ReactNode } from 'react';
import { Container, Icon, Text } from './BigIconButton.styled';
import { Box } from '@mui/material';

interface IProps {
  text: string;
  icon: ReactNode;
  onClick: () => void;
}

const BigIconButton: FC<IProps> = ({ text, icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon>{icon}</Icon>
      <Text variant="h6">
        <Box fontWeight={500}>{text}</Box>
      </Text>
    </Container>
  );
};

export default BigIconButton;
