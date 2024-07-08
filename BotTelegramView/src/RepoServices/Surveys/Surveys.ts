import { AxiosResponse } from 'axios';
import request from 'RepoServices/Requests';
import { IResponses, ISurvey } from 'LogicServices/Surveys/Types';

export interface IRequest {
  id?: number;
  page: number;
  pageSize: number;
}

export interface IFetchResponse {
  surveys: ISurvey[];
  total: number;
}

export interface IFetchSurveyResponses {
  responses: IResponses[];
  total: number;
}

export interface IFetchOneResponse {
  survey: ISurvey;
}

export interface IMessageResponse {
  message: string;
}

export const fetchSurvey = async (id: number) => {
  try {
    const res: AxiosResponse<IFetchOneResponse> = await request.get(
      `/api/survey/${id}`
    );

    return {
      survey: res.data.survey
    };
  } catch (error) {
    return 'error';
  }
};

export const fetchSurveys = async ({ page, pageSize }: IRequest) => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/surveys?page=${page}&pageSize=${pageSize}`
    );

    return {
      surveys: res.data.surveys,
      total: res.data.total
    };
  } catch (error) {
    return 'error';
  }
};

export const fetchSurveysOnly = async ({ page, pageSize }: IRequest) => {
  try {
    const res: AxiosResponse<IFetchResponse> = await request.get(
      `/api/surveys-only?page=${page}&pageSize=${pageSize}`
    );

    return {
      surveys: res.data.surveys,
      total: res.data.total
    };
  } catch (error) {
    return 'error';
  }
};

export const fetchSurveyResponses = async ({
  id,
  page,
  pageSize
}: IRequest) => {
  try {
    const res: AxiosResponse<IFetchSurveyResponses> = await request.get(
      `/api/survey/${id}/responses?page=${page}&pageSize=${pageSize}`
    );

    return {
      responses: res.data.responses,
      total: res.data.total
    };
  } catch (error) {
    return 'error';
  }
};

export const deleteSurvey = async (id: number) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.delete(
      `/api/survey/${id}`
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};

export const createSurvey = async (survey: ISurvey) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.post(
      `/api/survey`,
      survey
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};

export const updateSurvey = async (survey: ISurvey) => {
  try {
    const res: AxiosResponse<IMessageResponse> = await request.put(
      `/api/survey/${survey.surveyId}`,
      survey
    );

    return res.data.message;
  } catch (error) {
    return 'error';
  }
};
