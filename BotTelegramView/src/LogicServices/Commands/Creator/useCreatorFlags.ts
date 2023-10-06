import { useMemo } from 'react';
import { ICommandCreator } from './Types';

interface IProps {
  command: ICommandCreator;
}

const useCreatorFlags = ({ command }: IProps) => {
  const isAFileCommand = useMemo<boolean>(() => {
    const documentCommandId = 1;
    const mailDocumentCommandId = 11;
    const commandType = command.commandTypeId;

    return (
      commandType == documentCommandId || mailDocumentCommandId == commandType
    );
  }, [command]);

  const isANestedCommand = useMemo<boolean>(() => {
    const nestedCommandListId = 8;
    const nestedCommandButtonsId = 9;
    const commandType = command.commandTypeId;

    return (
      commandType == nestedCommandListId ||
      nestedCommandButtonsId == commandType
    );
  }, [command]);

  const isAParameterCommand = useMemo<boolean>(() => {
    const buttonCommandId = 3;
    const locationCommandId = 2;
    const commandType = command.commandTypeId;

    return commandType == buttonCommandId || commandType == locationCommandId;
  }, [command]);

  const isAButtonCommand = useMemo<boolean>(() => {
    const buttonCommandId = 3;
    const commandType = command.commandTypeId;

    return commandType == buttonCommandId;
  }, [command]);

  return {
    isAFileCommand,
    isAButtonCommand,
    isANestedCommand,
    isAParameterCommand
  };
};

export default useCreatorFlags;
