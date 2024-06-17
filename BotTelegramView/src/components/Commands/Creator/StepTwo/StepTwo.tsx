import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import { IInputConfigProps } from '../../Creator/Creator.types';
import {
  generateFileInputs,
  generateParameterInput,
  nestedCommandTableConfig,
  inputNames
} from './StepTwo.config';
import BuildInputs from 'components/Shared/BuildInputs';
import SectionAddToTable from 'components/Shared/SectionAddToTable/SectionAddToTable';
import { ICommandCreator, IFlags } from 'LogicServices/Commands/Creator/Types';
import { useNestedCommands } from 'LogicServices/Commands/Creator';
import { ILanguage } from 'Static/Lang/Lang.lang';

interface IProps {
  props: {
    inputParams: IInputConfigProps;
    flags: { editMode: boolean } & IFlags;
    command: ICommandCreator;
    language: ILanguage;
  };
  actions: {
    onChange: (command: ICommandCreator) => void;
  };
}

const StepTwo: FC<IProps> = ({ props, actions }) => {
  const { inputParams, flags, command, language } = props;
  const fileInputs = generateFileInputs(inputParams);
  const parameterInput = generateParameterInput(inputParams);
  const nestedCommands = useNestedCommands({
    command,
    onChange: actions.onChange
  });

  const tableConfig = {
    language,
    onDeleteCommand: nestedCommands.actions.onDeleteCommand,
    editMode: flags.editMode
  };
  return (
    <StepperContent>
      {flags.isAFileCommand &&
        fileInputs.map((input, index) => (
          <BuildInputs key={'file' + index} input={input} />
        ))}
      {flags.isAParameterCommand && <BuildInputs input={parameterInput} />}
      {flags.isANestedCommand && (
        <SectionAddToTable
          name={inputNames.nestedCommands}
          config={nestedCommandTableConfig(tableConfig)}
          dataset={command.botNestedCommands}
          title={language.addCommand}
          list={nestedCommands.state.nestedCommandsOptions}
          onChange={nestedCommands.actions.onAddCommand}
          loader={nestedCommands.state.loading}
          disabled={flags.editMode}
        />
      )}
    </StepperContent>
  );
};

export default StepTwo;
