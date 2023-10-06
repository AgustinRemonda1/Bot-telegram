import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { ICommand } from 'LogicServices/Commands/Types';

export interface IRequest {
  page: number;
  pageSize: number;
}

export interface IFetchResponse {
  commands: ICommand[];
  total: number;
}

export interface IMessageResponse {
  message: string;
}

export const fetchCommands = async ({ page, pageSize }: IRequest) => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/bot-commands?page=${page}&pageSize=${pageSize}`
    );

    return {
      commands: res.data.commands,
      total: res.data.total
    };
  } catch (error) {
    return 'error';
  }
};

export const deleteCommand = async (id: number) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.delete(
      `/api/bot-command/${id}`
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};

export const createCommand = async (command: ICommand) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.post(
      `/api/bot-command`,
      command
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};

export const updateCommand = async (command: ICommand) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.put(
      `/api/bot-command/${command.botCommandId}`,
      command
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};

export const refreshCommand = async () => {
  try {
    await request.put(`/api/bot-command/refresh`);

    return 'ok';
  } catch (error) {
    return 'error';
  }
};
