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
  const { state, actions } = useCreator({
    commandToEdit: null,
    onClose: () => {},
    onRefresh: () => {}
  });
  const commandEdit = useCommands({
    command: state.command,
    onChange: actions.onChange
  });
  const userTypes = useUserTypes();
  const commandTypes = useCommandTypes();
  const { step, onBackStep, onNextStep, onFinishStep } = useStepper({
    props: {
      maxSteps,
      validations: [!state.mainEmptyFields, !state.secondaryEmptyFields]
    },
    actions: { onSave: actions.onSave, onValidation: actions.onHasEmptyFields }
  });
  const stepsTitles = generateStepsTitles(language);

  const inputParams = {
    language,
    onChangeInputs: commandEdit.onChangeAttributes,
    command: state.command,
    isAButtonCommand: state.flags.isAButtonCommand,
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
        <SectionTitle sectionLabel="Nuevo" titleLabel="Comando" />
        <Stepper steps={stepsTitles} activeStep={step} icons={stepperIcons} />
        {step === 0 && (
          <StepOne inputParams={inputParams} typesLists={typesList} />
        )}
        {step === 1 && (
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
        {step === maxSteps && (
          <StepThree
            command={state.command}
            language={language}
            typesLists={typesList}
          />
        )}
        <StepperActionsButton
          props={{ step, maxSteps }}
          actions={{ onBackStep, onNextStep, onFinishStep }}
        />
      </CreatorContent>
    </Container>
  );
};

export default CreatorStepper;
