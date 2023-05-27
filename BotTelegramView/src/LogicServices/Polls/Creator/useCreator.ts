import { useCallback, useEffect, useState } from 'react';
import { IPoll } from '../Types';
import { savePoll } from './service';
import useValidation from './useValidation';

interface IProps {
  pollToEdit: IPoll | null;
  onClose: () => void;
  onRefresh: (refresh: boolean) => void;
}

export const INITIAL_POLL: IPoll = {
  name: '',
  description: '',
  userTypeId: 0,
  questions: []
};

const useCreator = ({ pollToEdit, onClose, onRefresh }: IProps) => {
  const [poll, setPoll] = useState<IPoll>(INITIAL_POLL);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { emptyFields } = useValidation({ poll });

  useEffect(() => {
    if (pollToEdit) {
      setPoll(pollToEdit);
    }
    setConfirmation(false);
    setHasEmptyFields(false);
  }, [pollToEdit]);

  useEffect(() => {
    if (confirmation) {
      setConfirmation(false);
      savePoll(poll, Boolean(pollToEdit));
      setLoading(false);
      onClose();
      onRefresh(true);
    }
  }, [confirmation, onClose, poll, pollToEdit, onRefresh]);

  const onChange = useCallback((poll: IPoll) => {
    setPoll(poll);
  }, []);

  const onSave = useCallback(() => {
    if (emptyFields) {
      setHasEmptyFields(true);
    } else {
      setHasEmptyFields(false);
      setLoading(true);
      setConfirmation(true);
    }
  }, [emptyFields]);

  return {
    state: {
      poll,
      emptyFields: emptyFields && hasEmptyFields,
      hasEmptyFields,
      questionsNumber: pollToEdit?.questions?.length,
      loading
    },
    actions: { onChange, onSave }
  };
};

export default useCreator;
