import React, { useContext } from 'react';
import { Container, Content, CenterContent } from 'components/Layout/Content';
import SectionTitle from 'components/Shared/SectionTitle';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { generatePasswordInputs } from './ChangePassword.config';
import BuildInputs from 'components/Shared/BuildInputs';
import useChangePassword from '~/LogicServices/Auth/ChangePassword/useChangePassword';

const ChangePassword = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useChangePassword();
  const passwordInputs = generatePasswordInputs({
    language,
    passwordInputs: state.passwordInputs,
    onChange: actions.onChange,
    emptyFields: state.hasEmptyFields,
    showNotEqualMessage: state.showNotEqualMessage
  });
  console.log(state.showNotEqualMessage);
  return (
    <Container>
      <Content>
        <SectionTitle titleLabel={language.changePasssword} />
        <CenterContent>
          {passwordInputs.map((input, index) => (
            <BuildInputs key={'config' + index} input={input} />
          ))}
          <Button
            startIcon={<SaveIcon />}
            variant="contained"
            style={{ marginTop: '40px' }}
            onClick={actions.onSave}
          >
            {language.save}
          </Button>
        </CenterContent>
      </Content>
    </Container>
  );
};

export default ChangePassword;
