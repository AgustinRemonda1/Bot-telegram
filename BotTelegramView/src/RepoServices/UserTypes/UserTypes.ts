import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { IUserType } from 'LogicServices/UserTypes/Types';

export interface IFetchResponse {
  userTypes: IUserType[];
  total: number;
}

export const fetchUserTypes = async () => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/user-types`
    );

    return {
      userTypes: res.data.userTypes
    };
  } catch (error) {
    return 'error';
  }
};
