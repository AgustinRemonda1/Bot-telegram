import React, { useContext } from 'react';
import {
  Container,
  SubTitle,
  TitleAndUnderlineContainer,
  Title,
  UnderLine,
  AddButton,
  AddIconColored
} from './SectionTitle.styles';
import { Box, useTheme } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { ModalControllerContext } from 'components/HOC/ModalController';
import { IProps } from './SectionTitle.types';

const SectionTitle = ({
  titleLabel,
  correctionLabel,
  action,
  hiddenSectionFrom,
  correctionTitle
}: IProps) => {
  const { isOpenDrawer } = useContext(ModalControllerContext);
  const { language } = useContext(LanguageContext);
  const theme = useTheme();

  return (
    <Container
      theme={theme}
      isOpenDrawer={Boolean(isOpenDrawer)}
      correction={Boolean(correctionTitle)}
    >
      {!hiddenSectionFrom && (
        <SubTitle variant="h5" gutterBottom>
          <Box fontWeight={700} m={1}>
            {language.sectionFrom}
          </Box>
        </SubTitle>
      )}
      <TitleAndUnderlineContainer>
        <Title variant="h4" gutterBottom correction={Boolean(correctionLabel)}>
          <Box fontWeight={700} m={1}>
            {titleLabel}
          </Box>
        </Title>
        <UnderLine theme={theme} hasAction={Boolean(action)} />
        {action && (
          <AddButton>
            <AddIconColored onClick={action} />
          </AddButton>
        )}
      </TitleAndUnderlineContainer>
    </Container>
  );
};

export default SectionTitle;
