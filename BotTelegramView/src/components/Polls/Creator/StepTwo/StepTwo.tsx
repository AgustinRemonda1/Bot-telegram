import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import { IEvent } from 'LogicServices/Shared/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { generateInputQuestions } from './StepTwo.config';
import { IPoll } from 'LogicServices/Polls/Types';

interface IProps {
  props: {
    poll: IPoll;
    language: ILanguage;
    hasEmptyFields: boolean;
  };
  actions: {
    onChangeQuestions: (e: IEvent, index: number) => void;
  };
}

const StepTwo: FC<IProps> = ({ props, actions }) => {
  const { poll, language, hasEmptyFields } = props;
  return (
    <StepperContent>
      {generateInputQuestions({
        poll: poll,
        onChangeQuestions: actions.onChangeQuestions,
        language,
        hasEmptyFields: hasEmptyFields
      })}
    </StepperContent>
  );
};

export default StepTwo;
