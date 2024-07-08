import viewIcon from 'Static/Assets/Icons/file-search.svg';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { ISurvey } from 'LogicServices/Surveys/Types';
import { IConfig } from 'LogicServices/Shared/Types';

interface IConfigProps {
  language: ILanguage;
  onViewSurveyResult: (id: number) => void;
}

export const generateConfigWithLang = (configParams: IConfigProps) => {
  const { language, onViewSurveyResult } = configParams;

  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'description'
    },
    {
      name: language.userType,
      property: 'name',
      nestedTable: 'userType'
    },
    {
      name: language.actions,
      align: 'center',
      isActions: true,
      actions: [
        {
          type: 'view',
          id: 'button-survey-view',
          title: language.view,
          icon: viewIcon.src,
          onClick: (survey: ISurvey) => {
            onViewSurveyResult(Number(survey.surveyId));
          }
        }
      ]
    }
  ] as IConfig[];
};
