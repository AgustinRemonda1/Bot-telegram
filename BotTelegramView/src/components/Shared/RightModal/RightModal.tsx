import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';
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
} from './RightModal.styled';

const RightModal = ({
  open,
  onClose,
  children,
  loading,
  title,
  onSave
}: IProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <StyledDrawer anchor="right" open={open} onClose={onClose}>
        <Header>
          <Text>
            <Box fontWeight={600}>{title}</Box>
          </Text>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <CloseButton onClick={onClose}>
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
