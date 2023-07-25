import React, { useCallback, useContext } from 'react';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { ContentSize } from './Creator.styled';
import {
  inputFirstConfig,
  inputNames,
  inputSecondaryConfig,
  coordinateOrButtonListInputConfig,
  NestedCommandTableConfig
} from './Creator.config';
import RightModal from 'components/Shared/RightModal';
import BuildInputs from 'components/Shared/BuildInputs';
import { ICommand } from '~/LogicServices/Commands/Types';
import SectionAddToTable from 'components/Shared/SectionAddToTable/SectionAddToTable';
import useCommands from 'LogicServices/Commands/Creator/useCommands';
import { commandTypesOptions, userTypesOptions } from './Creator.data';
import useCreator from '~/LogicServices/Commands/Creator/useCreator';
import { ICommandCreator } from '~/LogicServices/Commands/Creator/Types';

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

  const title = command ? language.editCommand : language.newCommand;
  const inputParams = {
    language,
    onChangeInputs: commandEdit.onChangeAttributes,
    command: state.command,
    userTypesOptions: userTypesOptions,
    commandTypesOptions: commandTypesOptions,
    emptyFirstFields: false,
    confirmation: false,
    editMode: command
  };

  const firstInputs = inputFirstConfig(inputParams);
  //const secondaryInputs = inputSecondaryConfig(inputParams);
  //const inputButtonOrCoordinate =
  //  coordinateOrButtonListInputConfig(inputParams);
  //const tableConfig = {
  //  language,
  //  handleDeleteNestedCommand: () => {},
  //  editMode: false
  //};

  return (
    <RightModal
      open={open}
      onClose={onClose}
      title={title}
      onSave={actions.onSave}
      loading={state.loading}
    >
      <ContentSize>
        {firstInputs.map((input, index) => (
          <BuildInputs key={'first' + index} input={input} />
        ))}
      </ContentSize>
    </RightModal>
  );
};

export default Creator;

//        {true &&
//          secondaryInputs.map((input, index) => (
//            <BuildInputs key={'secondary' + index} input={input} />
//          ))}
//        <BuildInputs input={inputButtonOrCoordinate} />
//        <SectionAddToTable
//          config={NestedCommandTableConfig(tableConfig)}
//          dataset={[]}
//          title={language.addCommand}
//          value={0}
//          list={[]}
//          onChange={() => {}}
//          loader={false}
//          disabled={false}
//        />
