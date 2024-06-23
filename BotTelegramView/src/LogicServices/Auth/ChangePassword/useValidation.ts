import { useState, useMemo, useCallback } from 'react';
import { validator } from 'LogicServices/Shared/utils';
import { IPasswordInputs } from './types';

interface IProps {
  passwordInputs: IPasswordInputs;
}

const useValidation = ({ passwordInputs }: IProps) => {
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);

  const hasToBeEquals = useMemo(() => {
    return passwordInputs.password === passwordInputs.confirmPassword;
  }, [passwordInputs]);

  const emptyFields = useMemo(() => {
    const inputs = !validator(passwordInputs, ['password', 'confirmPassword']);

    return inputs;
  }, [passwordInputs]);

  const onHasEmptyFields = useCallback(() => {
    setHasEmptyFields(emptyFields);
  }, [emptyFields]);

  return {
    hasToBeEquals,
    emptyFields,
    hasEmptyFields,
    onHasEmptyFields
  };
};

export default useValidation;
