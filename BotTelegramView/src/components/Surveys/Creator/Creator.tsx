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
import useCreator, { useSurvey } from 'LogicServices/Surveys/Creator';
import useUserTypes from 'LogicServices/Shared/useUserTypes';
import StepThree from './StepThree';

const CreatorStepper = () => {
  const { language } = useContext(LanguageContext);
  const userTypes = useUserTypes();
  const { state, actions } = useCreator();
  const surveyEdit = useSurvey({
    survey: state.survey,
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
          titleLabel={language.survey}
        />
        <Stepper
          steps={stepsTitles}
          activeStep={stepper.state.step}
          icons={stepperIcons}
        />
        {stepper.state.step === 0 && (
          <StepOne
            props={{
              survey: state.survey,
              emptyFields: state.hasEmptyFields,
              questionNumber: surveyEdit.state.questionNumber,
              language,
              userTypesOptions: userTypes.state.userTypesOptions
            }}
            actions={{ ...surveyEdit.actions }}
          />
        )}
        {stepper.state.step === 1 && (
          <StepTwo
            props={{
              survey: state.survey,
              hasEmptyFields: state.hasEmptyFields,
              language
            }}
            actions={{
              onChangeQuestions: surveyEdit.actions.onChangeQuestions
            }}
          />
        )}
        {stepper.state.step === maxSteps && (
          <StepThree
            props={{
              survey: state.survey,
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
