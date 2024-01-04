import React, { useContext } from 'react';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import {
  generateMainInputs,
  inputNames,
  generateFileInputs,
  generateParameterInput,
  NestedCommandTableConfig
} from './Creator.config';
import { ContentSize } from 'components/Layout/Content';
import RightModal from 'components/Shared/RightModal';
import BuildInputs from 'components/Shared/BuildInputs';
import SectionAddToTable from 'components/Shared/SectionAddToTable/SectionAddToTable';
import useCreator, {
  useCommandTypes,
  useCommands,
  useNestedCommands
} from 'LogicServices/Commands/Creator';
import useUserTypes from 'LogicServices/Shared/useUserTypes';
import { ICommand } from 'LogicServices/Commands/Types';
import { ICommandCreator } from 'LogicServices/Commands/Creator/Types';

interface IProps {
  command?: ICommand | null;
  open: boolean;
  onClose: () => void;
  onRefresh: (refresh: boolean) => void;
}

const Creator = ({ command, open, onClose, onRefresh }: IProps) => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useCreator({
    commandToEdit: command as ICommandCreator,
    onClose,
    onRefresh
  });
  const commandEdit = useCommands({
    command: state.command,
    onChange: actions.onChange
  });
  const userTypes = useUserTypes();
  const commandTypes = useCommandTypes();
  const nestedCommands = useNestedCommands({
    command: state.command,
    onChange: actions.onChange
  });

  const title = state.flags.editMode
    ? language.editCommand
    : language.newCommand;

  const inputParams = {
    language,
    onChangeInputs: commandEdit.onChangeAttributes,
    command: state.command,
    userTypesOptions: userTypes.state.userTypesOptions,
    commandTypesOptions: commandTypes.state.commandTypesOptions,
    isAButtonCommand: state.flags.isAButtonCommand,
    emptyFields: state.emptyFields,
    editMode: state.flags.editMode
  };

  const mainInputs = generateMainInputs(inputParams);
  const fileInputs = generateFileInputs(inputParams);
  const parameterInput = generateParameterInput(inputParams);
  const tableConfig = {
    language,
    onDeleteCommand: nestedCommands.actions.onDeleteCommand,
    editMode: state.flags.editMode
  };

  return (
    <RightModal
      open={open}
      onClose={onClose}
      title={title}
      onSave={actions.onSave}
      loading={state.loading}
    >
      <ContentSize>
        {mainInputs.map((input, index) => (
          <BuildInputs key={'main' + index} input={input} />
        ))}
        {state.flags.isAFileCommand &&
          fileInputs.map((input, index) => (
            <BuildInputs key={'file' + index} input={input} />
          ))}
        {state.flags.isAParameterCommand && (
          <BuildInputs input={parameterInput} />
        )}
        {state.flags.isANestedCommand && (
          <SectionAddToTable
            name={inputNames.nestedCommands}
            config={NestedCommandTableConfig(tableConfig)}
            dataset={state.command.botNestedCommands}
            title={language.addCommand}
            list={nestedCommands.state.nestedCommandsOptions}
            onChange={nestedCommands.actions.onAddCommand}
            loader={nestedCommands.state.loading}
            disabled={state.flags.editMode}
          />
        )}
      </ContentSize>
    </RightModal>
  );
};

export default Creator;
