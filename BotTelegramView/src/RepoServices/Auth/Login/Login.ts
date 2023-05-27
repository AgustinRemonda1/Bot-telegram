import { AxiosResponse } from 'axios';
import { IUser } from 'LogicServices/Auth/User';
import request from 'RepoServices/Requests';

interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export const loginRequest = async (login: ILoginRequest) => {
  try {
    const res: AxiosResponse<ILoginResponse> = await request.post(
      `/api/login`,
      login
    );

    return {
      user: res.data.user,
      token: res.data.token
    };
  } catch (error) {
    return 'error';
  }
};
