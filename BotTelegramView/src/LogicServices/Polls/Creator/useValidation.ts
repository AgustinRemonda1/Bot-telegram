import { useMemo, useState } from 'react';
import { IPoll } from '../Types';

interface IProps {
  poll: IPoll;
}

const useValidation = ({ poll }: IProps) => {
  const emptyFields = useMemo(() => {
    const name = Boolean(poll.name);
    const description = Boolean(poll.description);
    const userTypeId = Boolean(poll.userTypeId);
    const questions =
      poll.questions && poll.questions.every((question) => question.question);

    return !name || !description || !userTypeId || !questions;
  }, [poll]);

  return { emptyFields };
};

export default useValidation;
