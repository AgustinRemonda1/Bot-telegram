import { updateCommand, createCommand } from 'RepoServices/Commands';
import { ICommandCreator } from './Types';

export const saveCommand = async (
  command: ICommandCreator,
  update: boolean
) => {
  const response = update
    ? await updateCommand(command)
    : await createCommand(command);

  if (response !== 'error') {
    return response;
  }
};
