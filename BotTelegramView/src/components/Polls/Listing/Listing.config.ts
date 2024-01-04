import editIcon from 'Static/Assets/Icons/pencil.svg';
import trashIcon from 'Static/Assets/Icons/delete.svg';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { IPoll } from 'LogicServices/Polls/Types';
import { IConfig } from 'LogicServices/Shared/Types';

interface IConfigProps {
  language: ILanguage;
  onOpenDeletePopUp: (id: number) => void;
  onOpenPollPopUp: (poll?: IPoll) => void;
}

export const generateConfigWithLang = (configParams: IConfigProps) => {
  const { language, onOpenDeletePopUp, onOpenPollPopUp } = configParams;

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
          id: 'button-poll-edit',
          title: language.edit,
          icon: editIcon.src,
          onClick: (poll: IPoll) => {
            onOpenPollPopUp(poll);
          }
        },
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon.src,
          onClick: (poll: IPoll) => {
            onOpenDeletePopUp(Number(poll.pollId));
          }
        }
      ]
    }
  ] as IConfig[];
};
