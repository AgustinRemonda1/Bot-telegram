import { updateSurvey, createSurvey, fetchSurvey } from 'RepoServices/Surveys';
import { ISurvey } from '../Types';

export const saveSurvey = async (survey: ISurvey, update: boolean) => {
  const response = update
    ? await updateSurvey(survey)
    : await createSurvey(survey);

  if (response !== 'error') {
    return response;
  }
};

export const getSurvey = async (id: number) => {
  const response = await fetchSurvey(id);

  if (response !== 'error') {
    return response.survey;
  }
};
