import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { IUser } from 'LogicServices/Auth';

export interface IMessageResponse {
  message: string;
}

export const updateConfig = async (user: IUser) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.put(
      `/api/config`,
      user
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};
