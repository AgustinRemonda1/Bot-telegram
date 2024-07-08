import viewIcon from 'Static/Assets/Icons/file-search.svg';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { IResponses } from 'LogicServices/Surveys/Types';
import { IConfig } from 'LogicServices/Shared/Types';

interface IConfigProps {
  language: ILanguage;
  onOpenResponsesView: (responses: IResponses) => void;
}

export const generateConfigWithLang = (configParams: IConfigProps) => {
  const { language, onOpenResponsesView } = configParams;

  return [
    {
      name: language.id,
      property: 'responsesId'
    },
    {
      name: language.user,
      custom: () => language.anonymous
    },
    {
      name: language.actions,
      align: 'right',
      isActions: true,
      actions: [
        {
          type: 'view',
          id: 'button-response-view',
          title: language.view,
          icon: viewIcon.src,
          onClick: (response: IResponses) => {
            onOpenResponsesView(response);
          }
        }
      ]
    }
  ] as IConfig[];
};
