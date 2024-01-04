import { useCallback, useEffect, useState } from 'react';
import { IPoll } from '../Types';
import { buildQuestions, createArrayIterator } from './utils';
import { inputNames } from 'components/Polls/Creator/Creator.config';
import { INITIAL_POLL } from './useCreator';
import { IEvent } from 'LogicServices/Shared/Types';

interface IProps {
  open: boolean;
  poll: IPoll;
  questionsNumber?: number;
  onChange: (poll: IPoll) => void;
}

const usePoll = ({ open, poll, questionsNumber, onChange }: IProps) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  useEffect(() => {
    if (!open) {
      setQuestionNumber(0);
      onChange(INITIAL_POLL);
    }
  }, [open, onChange]);

  useEffect(() => {
    questionsNumber && setQuestionNumber(questionsNumber);
  }, [questionsNumber]);

  useEffect(() => {
    const questions = poll.questions || [];
    if (
      questions.length < questionNumber ||
      questions.length > questionNumber
    ) {
      const questionNumberToArray = createArrayIterator(questionNumber);

      const newQuestions = questionNumberToArray.map((e, index) =>
        questions[index] ? questions[index] : buildQuestions()
      );
      onChange({ ...poll, questions: newQuestions });
    }
  }, [questionNumber, poll]);

  const onChangeQuestionNumber = useCallback((e: IEvent) => {
    const value = Number(e.target.value);

    setQuestionNumber(value);
  }, []);

  const onChangePollFields = useCallback(
    (e: IEvent) => {
      const name = e.target.name;
      const value = e.target.value;

      if (name === inputNames.name) {
        onChange({ ...poll, name: value });
      } else if (name === inputNames.description) {
        onChange({ ...poll, description: value });
      } else if (name === inputNames.userType) {
        onChange({ ...poll, userTypeId: Number(value) });
      }
    },
    [onChange, poll]
  );

  const onChangeQuestions = useCallback(
    (e: IEvent, questionIndex: number) => {
      const questions = poll.questions || [];
      const value = e.target.value;

      const questionReplace = questions.map((question, index) => {
        if (index === questionIndex) {
          question.question = value;
          return {
            pollId: question.pollId,
            question: value,
            description: question.description
          };
        }
        return question;
      });

      onChange({ ...poll, questions: questionReplace });
    },
    [poll, onChange]
  );

  return {
    state: { questionNumber },
    actions: { onChangePollFields, onChangeQuestionNumber, onChangeQuestions }
  };
};

export default usePoll;
