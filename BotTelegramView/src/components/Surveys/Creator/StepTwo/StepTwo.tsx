import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import { IEvent } from 'LogicServices/Shared/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { generateInputQuestions } from './StepTwo.config';
import { ISurvey } from 'LogicServices/Surveys/Types';

interface IProps {
  props: {
    survey: ISurvey;
    language: ILanguage;
    hasEmptyFields: boolean;
  };
  actions: {
    onChangeQuestions: (e: IEvent, index: number) => void;
  };
}

const StepTwo: FC<IProps> = ({ props, actions }) => {
  const { survey, language, hasEmptyFields } = props;
  return (
    <StepperContent>
      {generateInputQuestions({
        survey: survey,
        onChangeQuestions: actions.onChangeQuestions,
        language,
        hasEmptyFields: hasEmptyFields
      })}
    </StepperContent>
  );
};

export default StepTwo;
