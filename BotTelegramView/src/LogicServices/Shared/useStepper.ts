import { useCallback, useState } from 'react';

interface IProps {
  props: { maxSteps: number; validations: boolean[]; editorMode: boolean };
  actions: {
    onValidation: (externalFlag?: boolean) => void;
    onSave: () => void;
  };
}

const useStepper = ({ props, actions }: IProps) => {
  const [step, setStep] = useState<number>(
    props.editorMode ? props.maxSteps : 0
  );
  const [confirmationStep, setConfirmationStep] = useState<boolean>(false);

  const onSelectStep = useCallback((step: number) => {
    setStep(step);
    setConfirmationStep(true);
  }, []);

  const onNextStep = useCallback(() => {
    if (step < props.maxSteps && props.validations[step]) {
      setStep(step + 1);
      actions.onValidation(false);
    } else {
      actions.onValidation();
    }
  }, [step, props, actions.onValidation]);

  const onBackStep = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
    }
  }, [step]);

  const onFirstStep = useCallback(() => {
    setStep(0);
  }, []);

  const onLastStep = useCallback(() => {
    if (step < props.maxSteps && props.validations[step]) {
      setStep(props.maxSteps);
      actions.onValidation(false);
    } else {
      actions.onValidation();
    }
  }, [step, props, actions.onValidation]);

  const onFinishStep = useCallback(() => {
    actions.onSave();
  }, [actions.onSave]);

  return {
    state: { step, confirmationStep },
    actions: {
      onNextStep,
      onBackStep,
      onFinishStep,
      onSelectStep,
      onFirstStep,
      onLastStep
    }
  };
};

export default useStepper;
