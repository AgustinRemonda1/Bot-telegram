import React, { useContext } from 'react';
import {
  Container,
  SubTitle,
  TitleAndUnderlineContainer,
  Title,
  UnderLine,
  AddButton,
  AddIconColored,
  CustomButton,
  IconContainer,
  Loader,
  LoaderContainer
} from './SectionTitle.styles';
import { Box } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { IProps } from './SectionTitle.types';

const SectionTitle = ({
  titleLabel,
  correctionLabel,
  action,
  hiddenSectionFrom,
  buttonProps,
  typeButton
}: IProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      {!hiddenSectionFrom && (
        <SubTitle variant="h5" gutterBottom>
          <Box fontWeight={700} m={1}>
            {language.sectionFrom.toUpperCase()}
          </Box>
        </SubTitle>
      )}
      <TitleAndUnderlineContainer>
        <Title variant="h4" gutterBottom correction={Boolean(correctionLabel)}>
          <Box fontWeight={700} m={1}>
            {titleLabel.toUpperCase()}
          </Box>
        </Title>
        <UnderLine hasAction={Boolean(action)} />
        {action && (!typeButton || typeButton === 'AddButton') && (
          <AddButton>
            <AddIconColored onClick={action} />
          </AddButton>
        )}
        {typeButton === 'CustomButton' && buttonProps && (
          <CustomButton
            variant="contained"
            onClick={action && action}
            disabled={buttonProps.disabled}
          >
            <IconContainer>{buttonProps.icon}</IconContainer>
            {buttonProps.label}

            {buttonProps.disabled && (
              <LoaderContainer>
                <Loader size={35} />
              </LoaderContainer>
            )}
          </CustomButton>
        )}
      </TitleAndUnderlineContainer>
    </Container>
  );
};

export default SectionTitle;
