import { useCallback, useEffect, useState } from 'react';
import { IQuestion, ISurvey } from '../Types';
import { saveSurvey, getSurvey } from './service';
import useValidation from './useValidation';
import { useRouter } from 'next/router';

export const INITIAL_POLL: ISurvey = {
  name: '',
  description: '',
  userTypeId: 0,
  questionResponse: {
    questions: [] as IQuestion[]
  }
};

const useCreator = () => {
  const [survey, setSurvey] = useState<ISurvey>(INITIAL_POLL);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    hasEmptyFields,
    mainEmptyFields,
    secondaryEmptyFields,
    onHasEmptyFields
  } = useValidation({ survey });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getSurveyByID = async (id: number) => {
      const survey = await getSurvey(id);

      if (survey) {
        setSurvey({
          ...survey
        });
      }
    };

    if (id) {
      getSurveyByID(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (confirmation) {
      setConfirmation(false);
      saveSurvey(survey, Boolean(id));
      setLoading(false);
      router.replace('/Dashboard/Surveys');
    }
  }, [confirmation, survey, id, router]);

  const onChange = useCallback((survey: ISurvey) => {
    setSurvey(survey);
  }, []);

  const onSave = useCallback(() => {
    setLoading(true);
    setConfirmation(true);
  }, []);

  return {
    state: {
      survey,
      mainEmptyFields: mainEmptyFields,
      secondaryEmptyFields: secondaryEmptyFields,
      hasEmptyFields,
      editMode: Boolean(id),
      loading
    },
    actions: { onChange, onSave, onHasEmptyFields }
  };
};

export default useCreator;
