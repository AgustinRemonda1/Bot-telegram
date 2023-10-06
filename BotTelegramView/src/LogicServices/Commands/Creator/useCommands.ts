import { useCallback } from 'react';
import { ICommandCreator } from './Types';
import { inputNames } from '~/components/Commands/Creator/Creator.config';

interface IProps {
  command: ICommandCreator;
  onChange: (command: ICommandCreator) => void;
}

const useCommands = ({ command, onChange }: IProps) => {
  const onChangeAttributes = useCallback(
    (e: any) => {
      const value = e.target.value;
      const target = e.target.name;

      if (target === inputNames.response) {
        onChange({
          ...command,
          botResponses: { ...command.botResponses, response: value }
        });
      } else if (target === inputNames.fileName) {
        onChange({
          ...command,
          botResponses: {
            ...command.botResponses,
            botResponseFiles: {
              ...command.botResponses.botResponseFiles,
              filename: value
            }
          }
        });
      } else if (target === inputNames.url) {
        onChange({
          ...command,
          botResponses: {
            ...command.botResponses,
            botResponseFiles: {
              ...command.botResponses.botResponseFiles,
              url: value
            }
          }
        });
      } else if (target === inputNames.parameter) {
        onChange({
          ...command,
          botResponses: { ...command.botResponses, parameter: value }
        });
      } else {
        onChange({ ...command, [target]: value });
      }
    },
    [command, onChange]
  );

  return { onChangeAttributes };
};

export default useCommands;
