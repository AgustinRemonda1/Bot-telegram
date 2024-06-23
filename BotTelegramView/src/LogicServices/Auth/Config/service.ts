import { updateConfig } from 'RepoServices/Auth/Config';
import { IUser } from '../types';

export const saveConfig = async (user: IUser) => {
  const response = await updateConfig(user);

  if (response !== 'error') {
    return response;
  }
};
