import React, { useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import { LanguageContext } from '../../../Static/Lang/Lang.lang';
import { IProps } from './RightModal.types';
import {
  CloseButton,
  Content,
  Footer,
  Header,
  Loader,
  LoaderContainer,
  StyledDrawer,
  SubmitButton,
  Text
} from './RightModal.style';

const RightModal = ({
  open,
  onClose,
  children,
  loading,
  title,
  onSave
}: IProps) => {
  const { language } = useContext(LanguageContext);
  const theme = useTheme();
  return (
    <div>
      <StyledDrawer anchor="right" open={open} onClose={onClose}>
        <Header spacing={theme.spacing}>
          <Text>
            <Box fontWeight={600}>{title}</Box>
          </Text>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <CloseButton onClick={onClose} spacing={theme.spacing}>
            <Box fontWeight={600}>{language.close}</Box>
          </CloseButton>
          <SubmitButton variant="contained" disabled={loading} onClick={onSave}>
            <Box fontWeight={600}>{language.save}</Box>
          </SubmitButton>
          {loading && (
            <LoaderContainer>
              <Loader size={35} />
            </LoaderContainer>
          )}
        </Footer>
      </StyledDrawer>
    </div>
  );
};

export default RightModal;
