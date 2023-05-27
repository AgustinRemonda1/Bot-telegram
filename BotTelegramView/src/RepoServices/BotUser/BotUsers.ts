import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { IBotUsers } from 'LogicServices/BotUsers/Types';

export interface IRequest {
  page: number;
  pageSize: number;
}

export interface IFetchResponse {
  botUsers: IBotUsers[];
  total: number;
}

export const fetchBotUsers = async ({ page, pageSize }: IRequest) => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/bot-users?page=${page}&pageSize=${pageSize}`
    );

    return {
      botUsers: res.data.botUsers,
      total: res.data.total
    };
  } catch (error) {
    return 'error';
  }
};
