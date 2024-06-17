import { useState, useMemo, useCallback } from 'react';
import { IPoll } from '../Types';
import { validator } from 'LogicServices/Shared/utils';

interface IProps {
  poll: IPoll;
}

const useValidation = ({ poll }: IProps) => {
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);

  const mainEmptyFields = useMemo(() => {
    const mainInputs = !validator(poll, [
      'name',
      'description',
      'userTypeId',
      'questions.length'
    ]);

    return mainInputs;
  }, [poll]);

  const secondaryEmptyFields = useMemo(() => {
    const questions =
      poll.questions && poll.questions.every((question) => question.question);

    return !questions;
  }, [poll]);

  const onHasEmptyFields = useCallback(
    (externalFlag?: boolean) => {
      if (typeof externalFlag === 'boolean') {
        setHasEmptyFields(externalFlag);
      } else {
        setHasEmptyFields(mainEmptyFields || secondaryEmptyFields);
      }
    },
    [mainEmptyFields, secondaryEmptyFields]
  );

  return {
    hasEmptyFields,
    mainEmptyFields,
    secondaryEmptyFields,
    onHasEmptyFields
  };
};

export default useValidation;
