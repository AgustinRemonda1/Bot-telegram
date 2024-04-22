import React, { FC, useContext } from 'react';
import { StepperFooter } from 'components/Layout/Content';
import { Button } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';

interface IProps {
  props: { step: number; maxSteps: number };
  actions: {
    onBackStep: () => void;
    onNextStep: () => void;
    onFinishStep: () => void;
  };
}

const StepperActionsButton: FC<IProps> = ({ props, actions }) => {
  const { step, maxSteps } = props;
  const { onBackStep, onFinishStep, onNextStep } = actions;
  const { language } = useContext(LanguageContext);
  return (
    <StepperFooter>
      <Button variant="text" onClick={() => onBackStep()}>
        {language.back}
      </Button>
      <Button
        variant="contained"
        onClick={() => (step === maxSteps ? onFinishStep() : onNextStep())}
      >
        {step === maxSteps ? language.finish : language.next}
      </Button>
    </StepperFooter>
  );
};

export default StepperActionsButton;
