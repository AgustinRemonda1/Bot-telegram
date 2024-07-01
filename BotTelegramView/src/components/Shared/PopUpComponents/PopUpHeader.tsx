import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { DialogTitle, Text } from './PopUp.styles';

interface IProps {
  children: ReactNode;
  [key: string]: any;
}

const PopUpHeader = ({ children, ...other }: IProps) => {
  return (
    <DialogTitle disableTypography {...other}>
      <Text>
        <Box fontWeight={600}>{children}</Box>
      </Text>
    </DialogTitle>
  );
};

export default PopUpHeader;
