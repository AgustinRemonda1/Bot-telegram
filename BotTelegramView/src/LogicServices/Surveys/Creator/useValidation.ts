import { useState, useMemo, useCallback } from 'react';
import { ISurvey } from '../Types';
import { validator } from 'LogicServices/Shared/utils';

interface IProps {
  survey: ISurvey;
}

const useValidation = ({ survey }: IProps) => {
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);

  const mainEmptyFields = useMemo(() => {
    const mainInputs = !validator(survey, [
      'name',
      'description',
      'userTypeId',
      'questionResponse.questions.length'
    ]);

    return mainInputs;
  }, [survey]);

  const secondaryEmptyFields = useMemo(() => {
    const questions =
      survey.questionResponse.questions &&
      survey.questionResponse.questions.every((question) => question.question);

    return !questions;
  }, [survey]);

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
