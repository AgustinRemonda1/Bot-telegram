import { useCallback, useEffect, useState } from 'react';
import { IPoll } from '../Types';
import { savePoll, getPoll } from './service';
import useValidation from './useValidation';
import { useRouter } from 'next/router';

export const INITIAL_POLL: IPoll = {
  name: '',
  description: '',
  userTypeId: 0,
  questions: []
};

const useCreator = () => {
  const [poll, setPoll] = useState<IPoll>(INITIAL_POLL);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    hasEmptyFields,
    mainEmptyFields,
    secondaryEmptyFields,
    onHasEmptyFields
  } = useValidation({ poll });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getPollByID = async (id: number) => {
      const poll = await getPoll(id);

      if (poll) {
        setPoll({ ...poll, questions: poll.questions });
      }
    };

    if (id) {
      getPollByID(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (confirmation) {
      setConfirmation(false);
      savePoll(poll, Boolean(id));
      setLoading(false);
      router.replace('/Dashboard/Polls');
    }
  }, [confirmation, poll, id, router]);

  const onChange = useCallback((poll: IPoll) => {
    setPoll(poll);
  }, []);

  const onSave = useCallback(() => {
    setLoading(true);
    setConfirmation(true);
  }, []);

  return {
    state: {
      poll,
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
