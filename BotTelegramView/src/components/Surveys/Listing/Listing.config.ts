import editIcon from 'Static/Assets/Icons/pencil.svg';
import trashIcon from 'Static/Assets/Icons/delete.svg';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { ISurvey } from 'LogicServices/Surveys/Types';
import { IConfig } from 'LogicServices/Shared/Types';

interface IConfigProps {
  language: ILanguage;
  onOpenDeletePopUp: (id: number) => void;
  onEditSurvey: (id: number) => void;
}

export const generateConfigWithLang = (configParams: IConfigProps) => {
  const { language, onOpenDeletePopUp, onEditSurvey } = configParams;

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
          type: 'edit',
          id: 'button-survey-edit',
          title: language.edit,
          icon: editIcon.src,
          onClick: (survey: ISurvey) => {
            onEditSurvey(Number(survey.surveyId));
          }
        },
        {
          type: 'delete',
          id: 'button-survey-delete',
          title: language.delete,
          icon: trashIcon.src,
          onClick: (survey: ISurvey) => {
            onOpenDeletePopUp(Number(survey.surveyId));
          }
        }
      ]
    }
  ] as IConfig[];
};
