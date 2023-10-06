import { useCallback, useEffect, useState } from 'react';
import { ICommandCreator } from './Types';
import useCreatorFlags from './useCreatorFlags';
import useValidation from './useValidation';
import { saveCommand } from './service';

interface IProps {
  commandToEdit: ICommandCreator | null;
  onClose: () => void;
  onRefresh: (refresh: boolean) => void;
}

const INITIAL_COMMAND: ICommandCreator = {
  commandTypeId: 0,
  name: '',
  telCommand: '',
  description: '',
  status: true,
  userTypeId: 0,
  botResponses: {
    response: '',
    parameter: '',
    botResponseFiles: {
      filename: '',
      url: ''
    }
  },
  botNestedCommands: []
};

const useCreator = ({ commandToEdit, onClose, onRefresh }: IProps) => {
  const [command, setCommand] = useState<ICommandCreator>(INITIAL_COMMAND);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const flags = useCreatorFlags({ command });
  const { emptyFields } = useValidation({ command, flags });

  useEffect(() => {
    if (commandToEdit) {
      setCommand({
        ...commandToEdit,
        description:
          commandToEdit.botResponses?.description || commandToEdit.description,
        botNestedCommands: commandToEdit.botNestedCommands || []
      });
    }
    !commandToEdit && setCommand(INITIAL_COMMAND);
    setConfirmation(false);
    setHasEmptyFields(false);
  }, [commandToEdit]);

  useEffect(() => {
    if (confirmation) {
      setConfirmation(false);
      saveCommand(command, Boolean(commandToEdit));
      setLoading(false);
      onClose();
      onRefresh(true);
    }
  }, [confirmation, onClose, command, commandToEdit, onRefresh]);

  const onChange = useCallback((command: ICommandCreator) => {
    setCommand(command);
  }, []);

  const onSave = useCallback(() => {
    if (emptyFields) {
      setHasEmptyFields(true);
    } else {
      setHasEmptyFields(false);
      setLoading(true);
      setConfirmation(true);
    }
  }, [emptyFields]);

  return {
    state: {
      command,
      emptyFields: emptyFields && hasEmptyFields,
      hasEmptyFields,
      loading,
      flags: { ...flags, editMode: Boolean(commandToEdit) }
    },
    actions: { onChange, onSave }
  };
};

export default useCreator;
