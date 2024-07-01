import { changePassword } from 'RepoServices/Auth/ChangePassword';

export const updatePassword = async (password: string) => {
  const response = await changePassword(password);

  if (response !== 'error') {
    return response;
  }
};
