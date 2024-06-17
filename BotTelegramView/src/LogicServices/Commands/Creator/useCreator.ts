import { useCallback, useEffect, useState } from 'react';
import { ICommandCreator } from './Types';
import useCreatorFlags from './Validations/useCreatorFlags';
import useValidation from './Validations/useValidation';
import { saveCommand, getCommand } from './service';
import { useRouter } from 'next/router';

export const INITIAL_COMMAND: ICommandCreator = {
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

const useCreator = () => {
  const [command, setCommand] = useState<ICommandCreator>(INITIAL_COMMAND);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const flags = useCreatorFlags({ command });
  const {
    hasEmptyFields,
    mainEmptyFields,
    secondaryEmptyFields,
    onHasEmptyFields
  } = useValidation({
    command,
    flags
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getCommandById = async (id: number) => {
      const command = await getCommand(id);

      if (command) {
        setCommand({
          ...command,
          description: command.botResponses?.description || command.description,
          botNestedCommands: command.botNestedCommands || []
        });
      }
    };

    if (id) {
      getCommandById(Number(id));
    }
  }, [id, getCommand]);

  useEffect(() => {
    if (confirmation) {
      setConfirmation(false);
      saveCommand(command, Boolean(id));
      setLoading(false);
      router.replace('/Dashboard/Bot-Actions');
    }
  }, [confirmation, command, id, router]);

  const onChange = useCallback((command: ICommandCreator) => {
    setCommand(command);
  }, []);

  const onSave = useCallback(() => {
    setLoading(true);
    setConfirmation(true);
  }, []);

  return {
    state: {
      command,
      mainEmptyFields: mainEmptyFields,
      secondaryEmptyFields: secondaryEmptyFields,
      hasEmptyFields,
      loading,
      flags: { ...flags, editMode: Boolean(id) }
    },
    actions: { onChange, onSave, onHasEmptyFields }
  };
};

export default useCreator;
