import { IEvent } from 'LogicServices/Shared/Types';
import { IPasswordInputs } from '~/LogicServices/Auth/ChangePassword';
import { ILanguage } from '~/Static/Lang/Lang.lang';

export const inputNames = {
  password: 'password',
  confirmPassword: 'confirmPassword'
};

interface IConfigInputs {
  passwordInputs: IPasswordInputs;
  language: ILanguage;
  emptyFields: boolean;
  showNotEqualMessage: boolean;
  onChange: (e: IEvent) => void;
}

export const generatePasswordInputs = ({
  language,
  passwordInputs,
  onChange,
  emptyFields,
  showNotEqualMessage
}: IConfigInputs) => {
  return [
    {
      type: 'text',
      name: inputNames.password,
      title: language.password,
      onChange,
      value: passwordInputs.password || '',
      emptyFields,
      inputType: 'password'
    },
    {
      type: 'text',
      name: inputNames.confirmPassword,
      title: language.confirmPassword,
      onChange,
      value: passwordInputs.confirmPassword || '',
      emptyFields,
      inputType: 'password',
      customMessage: {
        condition: showNotEqualMessage,
        message: language.passwordMustBeEquals
      }
    }
  ];
};
