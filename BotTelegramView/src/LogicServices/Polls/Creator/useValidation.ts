import { useMemo } from 'react';
import { IPoll } from '../Types';
import { validator } from 'LogicServices/Shared/utils';

interface IProps {
  poll: IPoll;
}

const useValidation = ({ poll }: IProps) => {
  const emptyFields = useMemo(() => {
    const pollInputs = validator(poll, ['name', 'description', 'userTypeId']);
    const questions =
      poll.questions && poll.questions.every((question) => question.question);

    return !pollInputs || !questions;
  }, [poll]);

  return { emptyFields };
};

export default useValidation;
