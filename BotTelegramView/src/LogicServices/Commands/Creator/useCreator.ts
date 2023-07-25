import { useCallback, useEffect, useState } from 'react';
import { ICommandCreator } from './Types';
//import { savePoll } from './service';
//import useValidation from './useValidation';

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
    response: ''
  },
  botNestedCommands: []
};

const useCreator = ({ commandToEdit, onClose, onRefresh }: IProps) => {
  const [command, setCommand] = useState<ICommandCreator>(INITIAL_COMMAND);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  //const { emptyFields } = useValidation({ command });

  useEffect(() => {
    if (commandToEdit) {
      setCommand(commandToEdit);
    }
    setConfirmation(false);
    setHasEmptyFields(false);
  }, [commandToEdit]);

  useEffect(() => {
    if (confirmation) {
      setConfirmation(false);
      //savePoll(command, Boolean(commandToEdit));
      setLoading(false);
      onClose();
      onRefresh(true);
    }
  }, [confirmation, onClose, command, commandToEdit, onRefresh]);

  const onChange = useCallback((command: ICommandCreator) => {
    setCommand(command);
  }, []);

  const onSave = useCallback(() => {
    if (false) {
      setHasEmptyFields(true);
    } else {
      setHasEmptyFields(false);
      setLoading(true);
      setConfirmation(true);
    }
  }, []);

  return {
    state: {
      command,
      emptyFields: hasEmptyFields,
      hasEmptyFields,
      loading
    },
    actions: { onChange, onSave }
  };
};

export default useCreator;
