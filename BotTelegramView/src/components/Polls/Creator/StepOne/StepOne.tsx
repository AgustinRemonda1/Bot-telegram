import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import BuildInputs from 'components/Shared/BuildInputs';
import { generateInputConfig } from './StepOne.config';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { IPoll } from 'LogicServices/Polls/Types';
import { IEvent, IOption } from '~/LogicServices/Shared/Types';

interface IProps {
  props: {
    language: ILanguage;
    poll: IPoll;
    userTypesOptions: IOption[];
    emptyFields: boolean;
    questionNumber: number;
  };
  actions: {
    onChangePollFields: (e: IEvent) => void;
    onChangeQuestionNumber: (e: IEvent) => void;
  };
}

const StepOne: FC<IProps> = ({ props, actions }) => {
  const inputs = generateInputConfig({
    language: props.language,
    onChange: actions.onChangePollFields,
    poll: props.poll,
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
