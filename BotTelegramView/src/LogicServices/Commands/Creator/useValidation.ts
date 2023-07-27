import { useMemo } from 'react';
import { ICommandCreator, IFlags } from './Types';

interface IProps {
  command: ICommandCreator;
  flags: IFlags;
}

interface IDataset {
  [key: string]: any;
}

const searchAttribute = (dataset: IDataset, item: string): any => {
  const route = item.split('.');
  const attribute = String(route.shift());

  if (route.length > 0) {
    return searchAttribute(dataset[attribute], route.join('.'));
  }
  try {
    return dataset[attribute];
  } catch {
    return true;
  }
};

const validator = (dataset: IDataset, list: string[]) => {
  const toValidate = list.map((item) => searchAttribute(dataset, item));

  return toValidate.every((item) => Boolean(item));
};

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
      return mainInputs && paramInput;
    } else if (flags.isAFileCommand) {
      return mainInputs && filesInputs;
    } else if (flags.isANestedCommand) {
      return mainInputs && nestedCommands;
    }
    return mainInputs;
  }, [command, flags]);

  return { emptyFields };
};

export default useValidation;
