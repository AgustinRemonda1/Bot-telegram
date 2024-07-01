import { useState, useEffect, useCallback } from 'react';
import { useAuthContext } from '../Auth';
import { IEvent } from 'LogicServices/Shared/Types';
import { IUser } from '../types';
import useValidation from './useValidation';
import { saveConfig } from './service';
import { useRouter } from 'next/router';

const INITIAL_USER: IUser = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  image: '',
  userRoleId: 1,
  backUserId: 1
};

const useConfig = () => {
  const [draftUser, setDraftUser] = useState<IUser>(INITIAL_USER);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const { emptyFields, hasEmptyFields, onHasEmptyFields } = useValidation({
    draftUser
  });
  const { user, actions } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setDraftUser(user);
    }
  }, [user]);

  useEffect(() => {
    if (confirmation && !hasEmptyFields) {
      setConfirmation(false);
      saveConfig(draftUser);
      actions.onSignOut();
      router.replace('/Auth/Login');
    }
  }, [confirmation, hasEmptyFields, draftUser, actions, router]);

  const onChange = useCallback(
    (e: IEvent) => {
      const value = e.target.value;
      const name = e.target.name;

      setDraftUser({ ...draftUser, [name]: value } as IUser);
    },
    [draftUser]
  );

  const onSave = useCallback(() => {
    if (emptyFields) {
      onHasEmptyFields();
    } else {
      setConfirmation(true);
    }
  }, [emptyFields, onHasEmptyFields]);

  const onChangePassword = useCallback(() => {
    router.replace('/Auth/Change-Password');
  }, [router]);

  return {
    state: { draftUser, hasEmptyFields },
    actions: { onChange, onSave, onChangePassword }
  };
};

export default useConfig;
