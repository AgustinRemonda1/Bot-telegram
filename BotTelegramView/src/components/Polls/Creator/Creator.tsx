import React, { useContext } from 'react';
import { Container, CreatorContent } from 'components/Layout/Content';
import Stepper from 'components/Shared/Stepper';
import SectionTitle from 'components/Shared/SectionTitle';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useStepper from 'LogicServices/Shared/useStepper';
import { stepperIcons, maxSteps, generateStepsTitles } from './Creator.config';
import StepperActionsButton from 'components/Shared/StepperActionsButton';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import useCreator, { usePoll } from 'LogicServices/Polls/Creator';
import useUserTypes from 'LogicServices/Shared/useUserTypes';
import StepThree from './StepThree';

const CreatorStepper = () => {
  const { language } = useContext(LanguageContext);
  const userTypes = useUserTypes();
  const { state, actions } = useCreator();
  const pollEdit = usePoll({
    poll: state.poll,
    onChange: actions.onChange
  });

  const stepper = useStepper({
    props: {
      maxSteps,
      validations: [!state.mainEmptyFields, !state.secondaryEmptyFields],
      editorMode: state.editMode
    },
    actions: {
      onSave: actions.onSave,
      onValidation: actions.onHasEmptyFields
    }
  });

  const stepsTitles = generateStepsTitles(language, state.editMode);
  return (
    <Container>
      <CreatorContent>
        <SectionTitle
          sectionLabel={state.editMode ? language.edit : language.newF}
          titleLabel={language.poll}
        />
        <Stepper
          steps={stepsTitles}
          activeStep={stepper.state.step}
          icons={stepperIcons}
        />
        {stepper.state.step === 0 && (
          <StepOne
            props={{
              poll: state.poll,
              emptyFields: state.hasEmptyFields,
              questionNumber: pollEdit.state.questionNumber,
              language,
              userTypesOptions: userTypes.state.userTypesOptions
            }}
            actions={{ ...pollEdit.actions }}
          />
        )}
        {stepper.state.step === 1 && (
          <StepTwo
            props={{
              poll: state.poll,
              hasEmptyFields: state.hasEmptyFields,
              language
            }}
            actions={{ onChangeQuestions: pollEdit.actions.onChangeQuestions }}
          />
        )}
        {stepper.state.step === maxSteps && (
          <StepThree
            props={{
              poll: state.poll,
              userTypesOptions: userTypes.state.userTypesOptions,
              language,
              editMode: state.editMode
            }}
            actions={{ onSelectStep: stepper.actions.onSelectStep }}
          />
        )}
        <StepperActionsButton
          props={{
            ...stepper.state,
            maxSteps,
            loading: state.loading
          }}
          actions={{
            ...stepper.actions
          }}
        />
      </CreatorContent>
    </Container>
  );
};

export default CreatorStepper;
