import { useMemo } from 'react';
import { ICommandCreator, IFlags } from './Types';
import { validator } from 'LogicServices/Shared/utils';

export interface IProps {
  command: ICommandCreator;
  flags: IFlags;
}

const useValidation = ({ command, flags }: IProps) => {
  const emptyFields = useMemo(() => {
    const mainInputs = !validator(command, [
      'name',
      'description',
      'telCommand',
      'commandTypeId',
      'userTypeId',
      'botResponses.response'
    ]);
    const filesInputs = !validator(command, [
      'botResponses.botResponseFiles.filename',
      'botResponses.botResponseFiles.url'
    ]);
    const paramInput = !validator(command, ['botResponses.parameter']);
    const nestedCommands = !validator(command, ['botNestedCommands.length']);

    if (flags.isAParameterCommand) {
      return mainInputs || paramInput;
    } else if (flags.isAFileCommand) {
      return mainInputs || filesInputs;
    } else if (flags.isANestedCommand) {
      return mainInputs || nestedCommands;
    }
    return mainInputs;
  }, [command, flags]);

  return { emptyFields };
};

export default useValidation;
