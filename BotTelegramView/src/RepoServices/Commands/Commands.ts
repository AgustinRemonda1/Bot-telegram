import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { ICommand } from 'LogicServices/Commands/Types';
import { ICommandCreator } from 'LogicServices/Commands/Creator/Types';

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

export const fetchAllCommands = async () => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/bot-commands/all`
    );

    return {
      commands: res.data.commands
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

export const createCommand = async (command: ICommandCreator) => {
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

export const updateCommand = async (command: ICommandCreator) => {
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
