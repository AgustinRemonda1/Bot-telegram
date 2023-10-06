import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';

export interface IFetchStatisticsResponse {
  totalCommands: number;
  totalSubscribers: number;
  newLastAdmission: number;
  totalPolls: number;
}

export const fetchStatistics = async () => {
  try {
    const res: AxiosResponse<IFetchStatisticsResponse> = await request.get(
      `/api/bot-statistics`
    );

    return res.data;
  } catch (error) {
    return 'error';
  }
};
