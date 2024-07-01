import viewIcon from 'Static/Assets/Icons/file-search.svg';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { IConfig } from 'LogicServices/Shared/Types';
import { ICommandSuggestions } from 'LogicServices/Commands/Types';

export const commandNotEditable = [5, 6, 12, 13, 10];

interface IConfigProps {
  language: ILanguage;
  onOpenSuggestionView: (suggestion: ICommandSuggestions) => void;
}

export const generateConfigWithLang = (configParams: IConfigProps) => {
  const { language, onOpenSuggestionView } = configParams;

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
      name: language.actions,
      align: 'center',
      isActions: true,
      actions: [
        {
          type: 'view',
          id: 'button-command-suggestion-view',
          title: language.view,
          icon: viewIcon.src,
          onClick: (suggestion: ICommandSuggestions) => {
            onOpenSuggestionView(suggestion);
          }
        }
      ]
    }
  ] as IConfig[];
};
