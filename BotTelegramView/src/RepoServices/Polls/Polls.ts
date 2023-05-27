import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { IPoll } from 'LogicServices/Polls/Types';

export interface IRequest {
  page: number;
  pageSize: number;
}

export interface IFetchResponse {
  polls: IPoll[];
  total: number;
}

export interface IMessageResponse {
  message: string;
}

export const fetchPolls = async ({ page, pageSize }: IRequest) => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/polls?page=${page}&pageSize=${pageSize}`
    );

    return {
      polls: res.data.polls,
      total: res.data.total
    };
  } catch (error) {
    return 'error';
  }
};

export const deletePoll = async (id: number) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.delete(
      `/api/poll/${id}`
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};

export const createPoll = async (poll: IPoll) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.post(
      `/api/poll`,
      poll
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};

export const updatePoll = async (poll: IPoll) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.put(
      `/api/poll/${poll.pollId}`,
      poll
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};
