import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import BuildInputs from 'components/Shared/BuildInputs';
import { generateInputConfig } from './StepOne.config';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { ISurvey } from 'LogicServices/Surveys/Types';
import { IEvent, IOption } from '~/LogicServices/Shared/Types';

interface IProps {
  props: {
    language: ILanguage;
    survey: ISurvey;
    userTypesOptions: IOption[];
    emptyFields: boolean;
    questionNumber: number;
  };
  actions: {
    onChangeSurveyFields: (e: IEvent) => void;
    onChangeQuestionNumber: (e: IEvent) => void;
  };
}

const StepOne: FC<IProps> = ({ props, actions }) => {
  const inputs = generateInputConfig({
    language: props.language,
    onChange: actions.onChangeSurveyFields,
    survey: props.survey,
    emptyFields: props.emptyFields,
    userTypes: props.userTypesOptions,
    onChangeQuestionNumber: actions.onChangeQuestionNumber,
    questionNumber: props.questionNumber
  });

  return (
    <StepperContent>
      {inputs.map((input, index) => (
        <BuildInputs key={index} input={input} />
      ))}
    </StepperContent>
  );
};

export default StepOne;
