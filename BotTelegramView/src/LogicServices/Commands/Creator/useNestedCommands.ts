import { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchAllCommands } from 'RepoServices/Commands';
import { IEvent, IOption } from 'LogicServices/Shared/Types';
import { ICommand } from '../Types';
import { ICommandCreator } from './Types';

interface IProps {
  command: ICommandCreator;
  onChange: (command: ICommandCreator) => void;
}

const useNestedCommands = ({ command, onChange }: IProps) => {
  const [nestedCommands, setNestedCommands] = useState<ICommand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const nestedCommandsOptions: IOption[] = useMemo(() => {
    const options = nestedCommands.map((command) => ({
      id: command.botCommandId || 0,
      name: command.name || ''
    }));

    const ids = command.botNestedCommands.map(
      (command) => command.botCommand.botCommandId
    );

    return options.filter((option) => !ids.includes(option.id));
  }, [nestedCommands, command]);

  useEffect(() => {
    setLoading(true);
    const getAllCommands = async () => {
      const response = await fetchAllCommands();

      if (response !== 'error') {
        setNestedCommands(response.commands);
      }
      setLoading(false);
    };
    getAllCommands();
  }, []);

  const onAddCommand = useCallback(
    (e: IEvent) => {
      const value = e.target.value;
      const commandToAdd = nestedCommands.find(
        (command) => command.botCommandId === Number(value)
      );

      if (commandToAdd) {
        onChange({
          ...command,
          botNestedCommands: [
            ...command.botNestedCommands,
            { botCommand: commandToAdd }
          ]
        });
      }
    },
    [command, nestedCommands, onChange]
  );

  const onDeleteCommand = useCallback(
    (id: number) => {
      const newCommandList = command.botNestedCommands.filter(
        (command) => command.botCommand.botCommandId !== id
      );

      onChange({ ...command, botNestedCommands: newCommandList });
    },
    [command, onChange]
  );

  return {
    state: { loading, nestedCommandsOptions },
    actions: { onAddCommand, onDeleteCommand }
  };
};

export default useNestedCommands;
