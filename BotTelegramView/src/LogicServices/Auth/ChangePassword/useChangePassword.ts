import { useState, useEffect, useCallback } from 'react';
import { useAuthContext } from '../Auth';
import { IEvent } from 'LogicServices/Shared/Types';
import { useRouter } from 'next/router';
import { IPasswordInputs } from './types';
import useValidation from './useValidation';
import { updatePassword } from './service';

const INITIAL_STATE = {
  password: '',
  confirmPassword: ''
};

const useChangePassword = () => {
  const [passwordInputs, setpasswordInputs] =
    useState<IPasswordInputs>(INITIAL_STATE);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const { hasToBeEquals, emptyFields, hasEmptyFields, onHasEmptyFields } =
    useValidation({
      passwordInputs
    });
  const { actions } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (confirmation && !hasEmptyFields && hasToBeEquals) {
      setConfirmation(false);
      updatePassword(passwordInputs.password);
      actions.onSignOut();
      router.replace('/Auth/Login');
    }
  }, [
    confirmation,
    hasEmptyFields,
    passwordInputs,
    actions,
    router,
    hasToBeEquals
  ]);

  const onChange = useCallback(
    (e: IEvent) => {
      const value = e.target.value;
      const name = e.target.name;

      setpasswordInputs({ ...passwordInputs, [name]: value });
    },
    [passwordInputs]
  );

  const onSave = useCallback(() => {
    if (emptyFields) {
      onHasEmptyFields();
    } else {
      setConfirmation(true);
    }
  }, [emptyFields, onHasEmptyFields]);

  return {
    state: {
      passwordInputs,
      hasEmptyFields,
      showNotEqualMessage: confirmation && !hasToBeEquals
    },
    actions: { onChange, onSave }
  };
};

export default useChangePassword;
