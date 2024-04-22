import { useCallback, useState } from 'react';

interface IProps {
  props: { maxSteps: number; validations: boolean[] };
  actions: {
    onValidation: (externalFlag?: boolean) => void;
    onSave: () => void;
  };
}

const useStepper = ({ props, actions }: IProps) => {
  const [step, setStep] = useState<number>(0);

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

  const onFinishStep = useCallback(() => {
    actions.onSave();
  }, [actions.onSave]);

  return { step, onNextStep, onBackStep, onFinishStep };
};

export default useStepper;
