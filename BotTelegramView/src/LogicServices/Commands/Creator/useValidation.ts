import { useState, useMemo, useCallback } from 'react';
import { ICommandCreator, IFlags } from './Types';
import { validator } from 'LogicServices/Shared/utils';

export interface IProps {
  command: ICommandCreator;
  flags: IFlags;
}

const useValidation = ({ command, flags }: IProps) => {
  const [hasEmptyFields, setHasEmptyFields] = useState<boolean>(false);

  const mainEmptyFields = useMemo(() => {
    const mainInputs = !validator(command, [
      'name',
      'description',
      'telCommand',
      'commandTypeId',
      'userTypeId',
      'botResponses.response'
    ]);
    return mainInputs;
  }, [command, flags]);

  const secondaryEmptyFields = useMemo(() => {
    const filesInputs = !validator(command, [
      'botResponses.botResponseFiles.filename',
      'botResponses.botResponseFiles.url'
    ]);
    const paramInput = !validator(command, ['botResponses.parameter']);
    const nestedCommands = !validator(command, ['botNestedCommands.length']);

    if (flags.isAParameterCommand) {
      return paramInput;
    } else if (flags.isAFileCommand) {
      return filesInputs;
    } else if (flags.isANestedCommand) {
      return nestedCommands;
    }
    return false;
  }, [command, flags]);

  const onHasEmptyFields = useCallback(
    (externalFlag?: boolean) => {
      if (typeof externalFlag === 'boolean') {
        setHasEmptyFields(externalFlag);
      } else {
        setHasEmptyFields(mainEmptyFields || secondaryEmptyFields);
      }
    },
    [mainEmptyFields, secondaryEmptyFields]
  );

  return {
    hasEmptyFields,
    mainEmptyFields,
    secondaryEmptyFields,
    onHasEmptyFields
  };
};

export default useValidation;
