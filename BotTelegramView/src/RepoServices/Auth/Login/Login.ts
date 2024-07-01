import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';

interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export const loginRequest = async (login: ILoginRequest) => {
  try {
    const res: AxiosResponse<ILoginResponse> = await request.post(
      `/api/login`,
      login
    );

    return {
      token: res.data.token
    };
  } catch (error) {
    return 'error';
  }
};
