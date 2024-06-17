import React, { FC, useCallback, useContext } from 'react';
import { StepperFooter } from 'components/Layout/Content';
import { Button } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import SaveIcon from '@mui/icons-material/Save';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IProps {
  props: {
    step: number;
    maxSteps: number;
    confirmationStep: boolean;
    jumpStep?: boolean;
    loading?: boolean;
  };
  actions: {
    onBackStep: () => void;
    onNextStep: () => void;
    onFinishStep: () => void;
    onFirstStep: () => void;
    onLastStep: () => void;
  };
}

const StepperActionsButton: FC<IProps> = ({ props, actions }) => {
  const { step, maxSteps, confirmationStep, jumpStep } = props;
  const { onBackStep, onFinishStep, onNextStep, onFirstStep, onLastStep } =
    actions;
  const { language } = useContext(LanguageContext);

  const onClickNextStep = useCallback(() => {
    if (step === maxSteps) {
      onFinishStep();
    } else {
      jumpStep ? onLastStep() : onNextStep();
    }
  }, [step, maxSteps, jumpStep, onFinishStep, onLastStep, onNextStep]);

  return (
    <StepperFooter>
      <Button
        variant="text"
        onClick={() => (jumpStep ? onFirstStep() : onBackStep())}
        disabled={step === 0}
        startIcon={<ChevronLeftIcon />}
      >
        {language.back}
      </Button>
      <Button
        variant="contained"
        onClick={() => onClickNextStep()}
        startIcon={step === maxSteps && <SaveIcon />}
        endIcon={step !== maxSteps && <ChevronRightIcon />}
        disabled={props.loading}
      >
        {step === maxSteps ? language.finish : language.next}
      </Button>
      {confirmationStep && step !== maxSteps && (
        <Button variant="outlined" onClick={() => onLastStep()}>
          {language.confirm}
        </Button>
      )}
    </StepperFooter>
  );
};

export default StepperActionsButton;
