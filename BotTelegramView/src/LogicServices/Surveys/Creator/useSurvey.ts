import { useCallback, useEffect, useState } from 'react';
import { ISurvey } from '../Types';
import { buildQuestions, createArrayIterator } from './utils';
import { inputNames } from 'components/Surveys/Creator/StepOne/StepOne.config';
import { IEvent } from 'LogicServices/Shared/Types';

interface IProps {
  survey: ISurvey;
  onChange: (survey: ISurvey) => void;
}

const MINIMUM_QUESTION_NUMBER = 1;

const useSurvey = ({ survey, onChange }: IProps) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  useEffect(() => {
    survey.questionResponse.questions.length &&
      setQuestionNumber(survey.questionResponse.questions.length);
  }, [survey.questionResponse.questions.length]);

  useEffect(() => {
    const questions = survey.questionResponse.questions || [];
    const isChangeQuestionNumber =
      questions.length < questionNumber || questions.length > questionNumber;
    const isSurveyActive =
      survey.surveyId && questionNumber < MINIMUM_QUESTION_NUMBER;

    if (isChangeQuestionNumber && !isSurveyActive) {
      const questionNumberToArray = createArrayIterator(questionNumber);
      const newQuestions = questionNumberToArray.map((e, index) =>
        questions[index] ? questions[index] : buildQuestions()
      );
      onChange({
        ...survey,
        questionResponse: {
          ...survey.questionResponse,
          questions: newQuestions
        }
      });
    }
  }, [questionNumber, survey]);

  const onChangeQuestionNumber = useCallback((e: IEvent) => {
    const value = Number(e.target.value);

    setQuestionNumber(value);
  }, []);

  const onChangeSurveyFields = useCallback(
    (e: IEvent) => {
      const name = e.target.name;
      const value = e.target.value;

      if (name === inputNames.name) {
        onChange({ ...survey, name: value });
      } else if (name === inputNames.description) {
        onChange({ ...survey, description: value });
      } else if (name === inputNames.userType) {
        onChange({ ...survey, userTypeId: Number(value) });
      }
    },
    [onChange, survey]
  );

  const onChangeQuestions = useCallback(
    (e: IEvent, questionIndex: number) => {
      const questions = survey.questionResponse.questions || [];
      const value = e.target.value;

      const questionReplace = questions.map((question, index) => {
        if (index === questionIndex) {
          question.question = value;
          return {
            questionId: question.questionId,
            questionResponseId: question.questionResponseId,
            question: value,
            description: question.description
          };
        }
        return question;
      });

      onChange({
        ...survey,
        questionResponse: {
          ...survey.questionResponse,
          questions: questionReplace
        }
      });
    },
    [survey, onChange]
  );

  return {
    state: { questionNumber },
    actions: { onChangeSurveyFields, onChangeQuestionNumber, onChangeQuestions }
  };
};

export default useSurvey;
