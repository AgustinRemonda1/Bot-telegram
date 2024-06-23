import React, { useContext } from 'react';
import {
  Container,
  Content,
  CenterContent,
  LeftContent,
  InputContainer
} from 'components/Layout/Content';
import SectionTitle from 'components/Shared/SectionTitle';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { generateConfigInputs, generateFirstInput } from './Config.config';
import BuildInputs from 'components/Shared/BuildInputs';
import useConfig from 'LogicServices/Auth/Config/useConfig';
import { AvatarImage, ChangePasswordButton } from './Config.styled';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const Config = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useConfig();
  const inputParams = {
    user: state.draftUser,
    language,
    emptyFields: state.hasEmptyFields,
    onChange: actions.onChange
  };
  const firstInput = generateFirstInput(inputParams);
  const configInputs = generateConfigInputs(inputParams);

  return (
    <Container>
      <Content>
        <SectionTitle
          sectionLabel={language.sectionFrom}
          titleLabel={language.configurations}
        />
        <CenterContent>
          <AvatarImage src={state.draftUser?.image} />
          <BuildInputs input={firstInput} />
          <InputContainer>
            <ChangePasswordButton onClick={actions.onChangePassword}>
              {language.changePasssword}
            </ChangePasswordButton>
          </InputContainer>
          {configInputs.map((input, index) => (
            <BuildInputs key={'config' + index} input={input} />
          ))}
        </CenterContent>
        <LeftContent>
          <Button
            startIcon={<SaveIcon />}
            variant="contained"
            onClick={actions.onSave}
          >
            {language.save}
          </Button>
        </LeftContent>
      </Content>
    </Container>
  );
};

export default Config;
