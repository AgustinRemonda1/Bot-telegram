import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { ICommandTypes } from 'LogicServices/Commands/Types';

export interface IFetchResponse {
  commandTypes: ICommandTypes[];
  total: number;
}

export const fetchCommandTypes = async () => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/command-types`
    );

    return {
      commandTypes: res.data.commandTypes
    };
  } catch (error) {
    return 'error';
  }
};
