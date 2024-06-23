import { useState, useMemo, useCallback } from 'react';
import { IUser } from '../types';
import { validator } from 'LogicServices/Shared/utils';

interface IProps {
  draftUser: IUser;
}

const useValidation = ({ draftUser }: IProps) => {
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);

  const emptyFields = useMemo(() => {
    const inputs = !validator(draftUser, [
      'username',
      'firstName',
      'lastName',
      'email'
    ]);

    return inputs;
  }, [draftUser]);

  const onHasEmptyFields = useCallback(() => {
    setHasEmptyFields(emptyFields);
  }, [emptyFields]);

  return {
    emptyFields,
    hasEmptyFields,
    onHasEmptyFields
  };
};

export default useValidation;
