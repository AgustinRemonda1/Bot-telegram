import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';

export interface IMessageResponse {
  message: string;
}

export const changePassword = async (password: string) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.put(
      `/api/change-password`,
      password
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};
