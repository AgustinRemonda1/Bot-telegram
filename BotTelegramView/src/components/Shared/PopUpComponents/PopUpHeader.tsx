import React from 'react';
import { Box } from '@mui/material';
import { DialogTitle, Text } from './PopUp.styles';

const PopUpHeader = ({ children, onClose, ...other }: any) => {
  return (
    <DialogTitle disableTypography {...other}>
      <Text>
        <Box fontWeight={600}>{children}</Box>
      </Text>
    </DialogTitle>
  );
};

export default PopUpHeader;
