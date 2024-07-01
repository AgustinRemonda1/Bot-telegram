import React, { useContext } from 'react';
import { Container, CreatorContent } from 'components/Layout/Content';
import Stepper from 'components/Shared/Stepper';
import SectionTitle from 'components/Shared/SectionTitle';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useCreator, {
  useCommands,
  useCommandTypes
} from 'LogicServices/Commands/Creator';
import useUserTypes from 'LogicServices/Shared/useUserTypes';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import useStepper from 'LogicServices/Shared/useStepper';
import { stepperIcons, maxSteps, generateStepsTitles } from './Creator.config';
import StepperActionsButton from 'components/Shared/StepperActionsButton';
import StepThree from './StepThree';

const CreatorStepper = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useCreator();
  const commandEdit = useCommands({
    command: state.command,
    onChange: actions.onChange
  });
  const userTypes = useUserTypes();
  const commandTypes = useCommandTypes();
  const stepper = useStepper({
    props: {
      maxSteps,
      validations: [!state.mainEmptyFields, !state.secondaryEmptyFields],
      editorMode: state.flags.editMode
    },
    actions: {
      onSave: actions.onSave,
      onValidation: actions.onHasEmptyFields
    }
  });

  const {
    isAButtonCommand,
    isAFileCommand,
    isANestedCommand,
    isAParameterCommand
  } = state.flags;

  const hasToJumpStep = !(
    isAButtonCommand ||
    isAFileCommand ||
    isANestedCommand ||
    isAParameterCommand
  );

  const stepsTitles = generateStepsTitles(language, state.flags.editMode);
  const inputParams = {
    language,
    onChangeInputs: commandEdit.onChangeAttributes,
    command: state.command,
    isAButtonCommand: isAButtonCommand,
    emptyFields:
      (state.mainEmptyFields || state.secondaryEmptyFields) &&
      state.hasEmptyFields,
    editMode: state.flags.editMode
  };

  const typesList = {
    commandTypes: commandTypes.state.commandTypesOptions,
    userTypes: userTypes.state.userTypesOptions
  };

  return (
    <Container>
      <CreatorContent>
        <SectionTitle
          sectionLabel={state.flags.editMode ? language.edit : language.new}
          titleLabel={language.command}
        />
        <Stepper
          steps={stepsTitles}
          activeStep={stepper.state.step}
          icons={stepperIcons}
        />
        {stepper.state.step === 0 && (
          <StepOne inputParams={inputParams} typesLists={typesList} />
        )}
        {stepper.state.step === 1 && (
          <StepTwo
            props={{
              command: state.command,
              inputParams,
              language,
              flags: state.flags
            }}
            actions={{ onChange: actions.onChange }}
          />
        )}
        {stepper.state.step === maxSteps && (
          <StepThree
            props={{
              command: state.command,
              language: language,
              typesLists: typesList,
              flags: state.flags
            }}
            actions={{ ...stepper.actions }}
          />
        )}
        <StepperActionsButton
          props={{
            ...stepper.state,
            maxSteps,
            jumpStep: hasToJumpStep,
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
