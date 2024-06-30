import React, { FC } from 'react';
import RightModal from 'components/Shared/RightModal';
import { ICommandSuggestions } from 'LogicServices/Commands/Types';
import { ContentSize, DataCeil } from 'components/Layout/Content';
import { Typography } from '@mui/material';
import { ILanguage } from 'Static/Lang/Lang.lang';
import AddIcon from '@mui/icons-material/Add';

interface IProps {
  props: {
    language: ILanguage;
    commandSuggestion?: ICommandSuggestions;
    title: string;
    open: boolean;
  };
  actions: {
    onClose: () => void;
    onCreate: () => void;
  };
}

const ViewModal: FC<IProps> = ({ props, actions }) => {
  return (
    <RightModal
      title={props.title}
      open={props.open}
      onClose={actions.onClose}
      onSave={actions.onCreate}
      customMainAction={{ title: props.language.create, icon: <AddIcon /> }}
      loading={false}
    >
      <ContentSize>
        <DataCeil correction>
          <Typography variant="h6">{props.language.name}</Typography>
          <Typography>{props.commandSuggestion?.name}</Typography>
        </DataCeil>
        <DataCeil correction>
          <Typography variant="h6">{props.language.description}</Typography>
          <Typography>{props.commandSuggestion?.description}</Typography>
        </DataCeil>
      </ContentSize>
    </RightModal>
  );
};

export default ViewModal;
